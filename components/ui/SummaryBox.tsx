import { Shield } from "lucide-react";
import { Service } from "@/prisma/generated/client";

interface SummaryBoxProps {
  appointment: any;
  services: Service[];
  totalMinutes: number;
  totalPrice: number;
  bookingFee: number;
  remainingPrice: number;
  canConfirm: boolean;
}

export function SummaryBox({
  appointment,
  services,
  totalMinutes,
  totalPrice,
  bookingFee,
  remainingPrice,
  canConfirm
}: SummaryBoxProps) {
  const formatDuration = (mins: number) => {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
      <h3 className="text-lg font-black text-black mb-4 pb-2 border-b border-gray-100">
        Resumo do Agendamento
      </h3>

      <div className="space-y-3 text-sm mb-5">
        <div className="flex justify-between">
          <span className="text-gray-500">Data e Horário:</span>
          <span className="font-bold text-black text-right">
            {appointment?.date && new Date(appointment.date).toLocaleDateString("pt-BR", {
              weekday: "short",
              day: "2-digit",
              month: "short",
            })}, às {appointment?.time}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Duração Total:</span>
          <span className="font-semibold text-gray-800">{formatDuration(totalMinutes)}</span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-3 mb-5 space-y-1.5">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
          Serviços selecionados
        </div>
        {appointment?.services.map((selection: any) => {
          const service = services?.find((s) => s.id === selection.serviceId);
          return (
            <div key={service?.id} className="flex justify-between text-xs text-gray-800 font-medium">
              <span>• {service?.name}</span>
              <span>R$ {((service?.price ?? 0) / 100).toFixed(2)}</span>
            </div>
          );
        })}
      </div>

      <div className="space-y-2.5 border-t border-gray-100 pt-4 mb-5 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal dos serviços:</span>
          <span className="font-medium text-gray-900">R$ {totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Taxa de agendamento:</span>
          <span className="font-medium text-gray-900">R$ {bookingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between p-3 bg-blue-50 text-blue-900 rounded-xl font-bold text-xs mt-1">
          <span>Pagar na unidade:</span>
          <span>R$ {remainingPrice.toFixed(2)}</span>
        </div>
      </div>

      <button 
        disabled={!canConfirm}
        className={`w-full text-white p-4 rounded-xl text-center font-bold transition-all shadow-sm ${
          canConfirm 
            ? "bg-black hover:bg-gray-900 cursor-pointer active:scale-[0.99]" 
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        <div className="text-xs font-normal opacity-80 uppercase tracking-widest mb-0.5">
          Confirmar Agendamento
        </div>
        <div className="text-xl font-black">Pagar R$ {bookingFee.toFixed(2)}</div>
      </button>

      <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 mt-4">
        <Shield className="h-3.5 w-3.5 text-emerald-600" />
        <span>Ambiente seguro e criptografado SSL</span>
      </div>
    </div>
  );
}
