import { User } from "lucide-react";
import { Service, Professional, ProfessionalService } from "@/prisma/generated/client/edge";
import { Dispatch, SetStateAction } from "react";

type ProfessionalWithServices = Professional & {
  services: ProfessionalService[];
};

interface ChooseProfessionalProps {
  appointment: Appointment;
  professionals: Professional[];
  services: Service[];
  setAppointment: Dispatch<SetStateAction<Appointment>>;
}

type Appointment = {
  totalDuration: string;
  totalPrice: string;
  fullName: string;
  whatsApp: string;
  date: string;
  time: string;
  observations: string;
  services: {
    serviceId: string;
    professionalId: string;
  }[];
};

export function ChooseProfessional({
  appointment,
  professionals,
  services,
  setAppointment,
}: ChooseProfessionalProps) {

  // 💡 CORREÇÃO: Agrupa os serviços pela Categoria deles, e não por um ID temporário genérico
  const slots = appointment.services.reduce<Record<string, string[]>>(
  (acc, { serviceId }) => {
    // Encontra os detalhes do serviço na lista de serviços para saber a categoria dele
    const serviceDetails = services.find((s) => s.id === serviceId);
    const categoryKey = serviceDetails?.category || "Outros"; // ex: "HAIR", "NAILS"

    if (!acc[categoryKey]) acc[categoryKey] = [];
    acc[categoryKey].push(serviceId);
    return acc;
  },
  {}
  );

  const getEligibleProfessionals = (serviceIds: string[]) => {
  if (!serviceIds || serviceIds.length === 0) return [];

  // Filtra a lista de profissionais que veio do estado/banco
  return professionals.filter((p) => {
    // 🛡️ Garante que não vai quebrar se a relação não vier populada
    if (!p.services) return false;

    // Mapeia os IDs dos serviços que o profissional faz através da tabela intermediária
    const profServiceIds = new Set(p.services.map((s) => s.serviceId));

    // Valida se o profissional realiza TODOS os serviços do slot
    return serviceIds.every((sid) => profServiceIds.has(sid));
  });
  };

  const handleSelect = (categoryKey: string, professional: ProfessionalWithServices) => {
  setAppointment((prevAppointment) => {
    const updatedServices = prevAppointment.services.map((item) => {
      // Descobre a categoria do serviço atual
      const serviceDetails = services.find((s) => s.id === item.serviceId);
      
      // Se o serviço pertence à categoria do bloco que o usuário clicou
      if (serviceDetails?.category === categoryKey) {
        return {
          ...item,
          professionalId: professional.id, // Vincula o profissional especialista (ex: cabeleireiro ou manicure)
        };
      }
      return item;
    });

    return {
      ...prevAppointment,
      services: updatedServices,
    };
  });
};

  return (
    <div>
      <div className="flex items-center mb-6">
        <User className="w-6 h-6 text-gray-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">
          Escolha o profissional
        </h3>
      </div>

      <div className="flex flex-col gap-8">
        {Object.entries(slots).map(([slotKey, serviceIds], index) => {
  const eligible = getEligibleProfessionals(serviceIds);
  
  // 💡 CORREÇÃO: Encontra se já existe um profissional selecionado para esta categoria específica
  const selectedId = appointment.services.find((item) => {
    const serviceDetails = services.find((s) => s.id === item.serviceId);
    return serviceDetails?.category === slotKey;
  })?.professionalId || null;

  return (
    <div key={slotKey} className="mb-6">
      {/* 💡 Título atualizado para mostrar o nome da categoria de forma clara para o cliente */}
      <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
        Profissional para: {slotKey}
      </p>

      {eligible.length === 0 ? (
        <p className="text-sm text-red-500 bg-red-50 p-3 rounded-xl border border-red-100">
          Nenhum profissional disponível para esta categoria de serviços.
        </p>
      ) : (
        <div className="grid gap-3">
          {eligible.map((professional) => (
            <label
              key={professional.id}
              className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                selectedId === professional.id
                  ? "border-gray-900 bg-gray-50 shadow-sm"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <input
                type="radio"
                name={`professional-slot-${slotKey}`} // Separado por categoria para não conflitar com outros slots
                value={professional.id}
                checked={selectedId === professional.id}
                onChange={() => handleSelect(slotKey, professional)} // Envia a categoria e o profissional escolhido
                className="sr-only"
              />
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 shrink-0 overflow-hidden">
                {professional.profileImage && (
                  <img 
                    src={professional.profileImage} 
                    alt={professional.fullName} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">
                  {professional.fullName}
                </div>
                {(professional.category || professional.rating) && (
                  <div className="text-sm text-gray-500">
                    {professional.category && professional.category}
                    {professional.category && professional.rating && " • "}
                    {professional.rating && `⭐ ${professional.rating}`}
                  </div>
                )}
              </div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
})}
      </div>
    </div>
  );
}