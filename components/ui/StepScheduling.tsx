import { Calendar, Clock } from "lucide-react";
import { Service, Professional } from "@/prisma/generated/client";
import { formatDisplayDate } from "@/lib/utils";
import { Dispatch, SetStateAction, useMemo } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

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

interface SchedulingProps {
  appointment: Appointment;
  professionals: Professional[];
  services: Service[];
  setAppointment: Dispatch<SetStateAction<Appointment>>;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const WEEK_DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

const MORNING_SLOTS = ["10:00", "10:30", "11:00", "11:30"];
const AFTERNOON_SLOTS = ["12:00", "12:30","13:00","13:30",
  "14:00","14:30","15:00","15:30","16:00","16:30","17:00",
  "17:30","18:00","18:30","19:00","19:30"];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Returns the YYYY-MM-DD string for a given year, month (1-based), and day. */
function toDateString(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}


/**
 * Builds the flat list of calendar cells for a given month.
 * Null entries represent empty padding cells before the 1st.
 * Week starts on Monday (index 0).
 */
function buildCalendarDays(year: number, month: number): (number | null)[] {
  const jsDay = new Date(year, month - 1, 1).getDay(); // 0 = Sun
  const offset = jsDay === 0 ? 6 : jsDay - 1;          // shift so Mon = 0
  const daysInMonth = new Date(year, month, 0).getDate();

  return [
    ...Array<null>(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
}

/** Returns today's YYYY-MM-DD string (local time). */
function todayString(): string {
  const now = new Date();
  return toDateString(now.getFullYear(), now.getMonth() + 1, now.getDate());
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface TimeSlotGroupProps {
  label: string;
  slots: string[];
  selectedTime: string;
  onSelect: (time: string) => void;
}

function TimeSlotGroup({ label, slots, selectedTime, onSelect }: TimeSlotGroupProps) {
  return (
    <div className="mb-6 last:mb-0">
      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{label}</h4>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {slots.map((time) => {
          const isSelected = selectedTime === time;
          return (
            <button
              key={time}
              type="button"
              onClick={() => onSelect(time)}
              className={`py-3 px-2 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${
                isSelected
                  ? "bg-[#c5a059] text-white border-[#c5a059] hover:bg-[#b38f48]"
                  : "text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface SummaryRowProps {
  label: string;
  value: React.ReactNode;
}

function SummaryRow({ label, value }: SummaryRowProps) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="font-semibold text-black text-sm">{value}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function StepScheduling({
  appointment,
  services,
  setAppointment,
}: SchedulingProps) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1-based

  const today = todayString();
  const calendarDays = useMemo(() => buildCalendarDays(year, month), [year, month]);

  // Derived totals
  const { totalMinutes, totalPrice } = useMemo(() => {
    return (appointment?.services ?? []).reduce(
      (acc, { serviceId }) => {
        const service = services?.find((s) => s.id === serviceId);
        return {
          totalMinutes: acc.totalMinutes + (service?.duration ?? 0),
          totalPrice: acc.totalPrice + (service?.price ?? 0),
        };
      },
      { totalMinutes: 0, totalPrice: 0 }
    );
  }, [appointment?.services, services]);

  const formattedDuration = useMemo(() => {
    if (totalMinutes <= 0) return "Nenhum serviço";
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    if (h === 0) return `${m} min`;
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  }, [totalMinutes]);

  const formattedPrice = totalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Handlers
  function handleDateSelect(dateValue: string) {
    setAppointment((prev) => ({ ...prev, date: dateValue }));
  }

  function handleTimeSelect(time: string) {
    setAppointment((prev) => ({ ...prev, time }));
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-2 tracking-tight">
            Agendamento
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Quando você gostaria de ser atendido?
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* ── Left column: Calendar + Time slots ── */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">

              {/* Calendar */}
              <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Selecione a Data
              </h3>

              <div className="mb-8">
              {/* Day-of-week header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {WEEK_DAYS.map((d) => {
                  // Verifica se o dia atual é domingo ou segunda (independente de maiúscula/minúscula)
                  const isDisabled = d.toLowerCase() === 'seg' || d.toLowerCase() === 'dom';

                  return (
                    <div
                      key={d}
                      className={`text-center text-xs font-bold py-2 uppercase tracking-wider ${
                        isDisabled 
                          ? "text-gray-600 opacity-30 select-none line-through" // Estilo para os dias fechados
                          : "text-gray-400" // Estilo para os dias abertos
                      }`}
                    >
                      {d}
                    </div>
                  );
                })}
              </div>
                {/* Day cells */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => {
                    if (day === null) {
                      return <div key={`empty-${index}`} className="aspect-square" />;
                    }

                    const dateValue = toDateString(year, month, day);
                    const isSelected = appointment?.date === dateValue;
                    const isPast = dateValue < today;

                    return (
                      <button
                      key={dateValue}
                      type="button"
                      disabled={isPast}
                      onClick={() => handleDateSelect(dateValue)}
                      className={`aspect-square rounded-xl text-sm font-bold border transition-all duration-200 ${
                        isPast
                          ? "text-gray-300 border-transparent cursor-not-allowed"
                          : isSelected
                          ? "bg-[#c5a059] text-white border-[#c5a059] hover:bg-[#b38f48]" // Cor #c5a059 aplicada aqui (com um hover ligeiramente mais escuro)
                          : "text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-400"
                      }`}
                    >
                      {day}
                    </button>

                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Horários Disponíveis
              </h3>

              {!appointment?.date ? (
                <div className="text-center py-12 text-gray-400">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-gray-300" />
                  </div>
                  <p className="text-sm">Primeiro selecione uma data acima</p>
                </div>
              ) : (
                <>
                  <TimeSlotGroup
                    label="Manhã"
                    slots={MORNING_SLOTS}
                    selectedTime={appointment.time}
                    onSelect={handleTimeSelect}
                  />
                  <TimeSlotGroup
                    label="Tarde"
                    slots={AFTERNOON_SLOTS}
                    selectedTime={appointment.time}
                    onSelect={handleTimeSelect}
                  />
                </>
              )}
            </div>
          </div>
          {/* ── Right column: Summary card ── */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-black text-black mb-5">Resumo</h3>

              <div className="space-y-1 mb-6">
                <SummaryRow
                  label="Data"
                  value={
                    appointment?.date
                      ? formatDisplayDate(appointment.date)
                      : <span className="text-gray-400 italic font-normal">Não selecionada</span>
                  }
                />
                <SummaryRow
                  label="Horário"
                  value={
                    appointment?.time
                      ? `${appointment.time}h`
                      : <span className="text-gray-400 italic font-normal">Não selecionado</span>
                  }
                />
                <SummaryRow
                  label="Duração estimada"
                  value={formattedDuration}
                />
              </div>

              {/* Total price */}
              <div className="bg-black text-white p-4 rounded-xl text-center mb-4">
                <div className="text-xs uppercase tracking-widest mb-1 opacity-60">
                  Valor Total
                </div>
                <div className="text-3xl font-black">{formattedPrice}</div>
              </div>

              {/* Perks */}
              <ul className="text-xs text-gray-500 space-y-1.5 text-center">
                <li>✓ Confirmação por WhatsApp</li>
                <li>✓ Lembrete 1 hora antes</li>
                <li>✓ Reagendamento gratuito</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}