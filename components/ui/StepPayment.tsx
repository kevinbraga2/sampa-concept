import { User, CreditCard } from "lucide-react";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { Service, Professional } from "@/prisma/generated/client";
import { SummaryBox } from "@/components/ui/SummaryBox";
import { formatBrazilianPhone } from "@/lib/utils";
import { getClientByPhone } from "@/app/actions";

type ServiceSelection = {
  serviceId: string;
  professionalId: string;
};

type Appointment = {
  totalDuration: string;
  totalPrice: string;
  fullName: string;
  whatsApp: string;
  date: string;
  time: string;
  observations: string;
  services: ServiceSelection[];
};

interface StepPaymentProps {
  appointment: Appointment;
  professionals: Professional[];
  services: Service[];
  setAppointment: Dispatch<SetStateAction<Appointment>>;
}

export function StepPayment({
  appointment,
  services,
  setAppointment,
}: StepPaymentProps) {
  const [isExistingClient, setIsExistingClient] = useState(false);

  const canConfirm = Boolean(appointment?.fullName && appointment?.whatsApp);

  const { totalMinutes, totalPrice } = useMemo(() => {
    const totals = (appointment?.services ?? []).reduce(
      (acc, { serviceId }) => {
        const service = services?.find((s) => s.id === serviceId);
        return {
          totalMinutes: acc.totalMinutes + (service?.duration ?? 0),
          totalPrice: acc.totalPrice + (service?.price ?? 0),
        };
      },
      { totalMinutes: 0, totalPrice: 0 }
    );
    return {
      totalMinutes: totals.totalMinutes,
      totalPrice: totals.totalPrice / 100,
    };
  }, [appointment?.services, services]);

  const bookingFee = 1.0;
  const remainingPrice = Math.max(0, totalPrice - bookingFee);

  const handlePhoneChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    const masked = formatBrazilianPhone(e.target.value);

    // Reset state on every keystroke so editing the phone unlocks the name field
    setIsExistingClient(false);
    setAppointment((prev) => ({ ...prev, whatsApp: masked, fullName: "" }));

    if (digits.length !== 11) return;

    try {
      const client = await getClientByPhone(`55${digits}`);
      if (client) {
        setIsExistingClient(true);
        setAppointment((prev) => ({ ...prev, fullName: client.fullName }));
      }
    } catch (err) {
      console.error("Erro ao buscar cliente:", err);
    }
  };

  return (
  <div className="space-y-8 max-w-6xl mx-auto px-6 lg:px-10">
    <div className="mb-8 text-center sm:text-left">
      <h2 className="text-2xl sm:text-3xl font-black text-black mb-2 tracking-tight">
        Finalizar Agendamento
      </h2>
      <p className="text-gray-500 text-sm sm:text-base">
        Revise seus dados, escolha a forma de pagamento da taxa e confirme.
      </p>
    </div>

    {/* Layout atualizado para gap-10 */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* COLUNA ESQUERDA — Redimensionada para 8 Colunas */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* Dados Pessoais com padding p-5 sm:p-7 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 shadow-sm">
          <h3 className="text-lg font-bold text-black mb-5 flex items-center gap-2">
            <User className="h-5 w-5 text-gray-500" />
            1. Dados Pessoais
          </h3>

          {/* grid-cols-2 direto sem quebrar em md: para ficar sempre lado a lado */}
          <div className="grid grid-cols-2 gap-4">
            {/* Telefone */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                WhatsApp *
              </label>
              <div className="relative flex items-center rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-black/10 focus-within:border-gray-400 overflow-hidden transition-all">
                <div className="flex items-center gap-1 bg-gray-50 px-3 py-2 border-r border-gray-200 text-xs font-bold text-gray-400 select-none h-full">
                  <span className="text-sm">🇧🇷</span>
                  <span>+55</span>
                </div>
                <input
                  type="tel"
                  value={appointment?.whatsApp || ""}
                  onChange={handlePhoneChange}
                  maxLength={15}
                  placeholder="(11) 99999-9999"
                  className="w-full px-3 py-2 text-sm bg-transparent focus:outline-none font-medium text-gray-800"
                  required
                />
              </div>
            </div>

            {/* Nome Completo */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Nome Completo *
                </label>
                {isExistingClient && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                    ✓ Cliente Cadastrado
                  </span>
                )}
              </div>
              <input
                type="text"
                value={appointment?.fullName || ""}
                onChange={(e) =>
                  setAppointment((prev) => ({
                    ...prev,
                    fullName: e.target.value,
                  }))
                }
                placeholder="Nome do cliente"
                disabled={isExistingClient}
                className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 ${
                  isExistingClient
                    ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                    : "border-gray-200 bg-white text-gray-800 focus:border-gray-400"
                }`}
                required
              />
            </div>

            {/* Observações — Forçado para col-span-2 ocupando toda a largura */}
            <div className="col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Observações (opcional)
              </label>
              <textarea
                value={appointment?.observations || ""}
                onChange={(e) =>
                  setAppointment((prev) => ({
                    ...prev,
                    observations: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black text-sm"
                placeholder="Alguma preferência especial..."
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Forma de Pagamento com padding p-5 sm:p-7 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 shadow-sm">
          <h3 className="text-lg font-bold text-black mb-5 flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-gray-500" />
            2. Forma de Pagamento da Taxa
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <label className="flex items-center gap-3 p-4 border-2 border-black bg-gray-50 rounded-xl cursor-pointer">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="w-4 h-4 accent-black"
              />
              <div>
                <h4 className="font-bold text-sm text-black">PIX</h4>
                <p className="text-xs text-gray-500">Aprovação instantânea</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer">
              <input
                type="radio"
                name="payment"
                className="w-4 h-4 accent-black"
              />
              <div>
                <h4 className="font-bold text-sm text-black">
                  Cartão de Crédito
                </h4>
                <p className="text-xs text-gray-500">Até 1x sem juros</p>
              </div>
            </label>
          </div>
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              className="w-4 h-4 mt-0.5 accent-black flex-shrink-0"
            />
            <p className="text-xs text-gray-600">
              Declaro que li e aceito os{" "}
              <a href="#" className="text-black font-bold underline">
                termos de uso
              </a>{" "}
              e a{" "}
              <a href="#" className="text-black font-bold underline">
                política de privacidade
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* COLUNA DIREITA — Redimensionada para 4 Colunas e Sticky */}
      <div className="lg:col-span-4 lg:sticky lg:top-8">
        <SummaryBox
          appointment={appointment}
          services={services}
          totalMinutes={totalMinutes}
          totalPrice={totalPrice}
          bookingFee={bookingFee}
          remainingPrice={remainingPrice}
          canConfirm={canConfirm}
        />
      </div>
    </div>
  </div>
);

}