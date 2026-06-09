"use client";

import { useMemo, useState, useCallback } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Box,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileText,
  MessageSquare,
  Phone,
  Plus,
  Scissors,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

const START_HOUR = 9;
const END_HOUR = 19;
const SLOT_HEIGHT = 46;
const SLOT_STEP = 30;
const GRID_WIDTH = 240;

const PROFESSIONALS = [
  { id: "flavio", name: "Flávio", avatar: "F", accent: "from-emerald-300 to-emerald-500" },
  { id: "marcela", name: "Marcela", avatar: "M", accent: "from-sky-300 to-sky-500" },
  { id: "carla", name: "Carla", avatar: "C", accent: "from-violet-300 to-violet-500" },
  { id: "gabriela", name: "Gabriela", avatar: "G", accent: "from-pink-300 to-pink-500" },
  { id: "rafael", name: "Rafael", avatar: "R", accent: "from-amber-300 to-amber-500" },
];

const TIME_SLOTS = Array.from(
  { length: ((END_HOUR - START_HOUR) * 60) / SLOT_STEP + 1 },
  (_, idx) => {
    const totalMinutes = START_HOUR * 60 + idx * SLOT_STEP;
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  }
);

const INITIAL_APPOINTMENTS = [
  {
    id: "a1",
    proId: "flavio",
    client: "Ana Paula",
    service: "Corte",
    start: "09:30",
    end: "10:30",
    status: "Confirmado",
    color: "bg-emerald-100 border-emerald-200 text-emerald-900",
  },
  {
    id: "a2",
    proId: "marcela",
    client: "Bruno Souza",
    service: "Barba",
    start: "10:00",
    end: "10:45",
    status: "Pendente",
    color: "bg-sky-100 border-sky-200 text-sky-900",
  },
  {
    id: "a3",
    proId: "carla",
    client: "Larissa",
    service: "Micropigmentação",
    start: "11:00",
    end: "13:00",
    status: "Confirmado",
    color: "bg-violet-100 border-violet-200 text-violet-900",
  },
  {
    id: "a4",
    proId: "gabriela",
    client: "Mateus",
    service: "Coloração",
    start: "14:00",
    end: "15:30",
    status: "Confirmado",
    color: "bg-pink-100 border-pink-200 text-pink-900",
  },
  {
    id: "a5",
    proId: "rafael",
    client: "Lívia",
    service: "Escova",
    start: "15:00",
    end: "16:00",
    status: "Confirmado",
    color: "bg-amber-100 border-amber-200 text-amber-900",
  },
  {
    id: "a6",
    proId: "camila",
    client: "Paulo",
    service: "Penteado",
    start: "16:30",
    end: "17:30",
    status: "Confirmado",
    color: "bg-cyan-100 border-cyan-200 text-cyan-900",
  },
];

type AppointmentItem = {
  id: string;
  proId: string;
  client: string;
  service: string;
  start: string;
  end: string;
  status: string;
  color: string;
};

function addMinutes(time: string, amount: number) {
  const [hour, minute] = time.split(":").map(Number);
  const total = hour * 60 + minute + amount;
  const nextHour = Math.floor(total / 60);
  const nextMinute = total % 60;
  return `${String(nextHour).padStart(2, "0")}:${String(nextMinute).padStart(2, "0")}`;
}

function getMinuteOffset(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute - START_HOUR * 60;
}

function getSlotHeight(start: string, end: string) {
  const diff = Math.max(30, getMinuteOffset(end) - getMinuteOffset(start));
  return (diff / SLOT_STEP) * SLOT_HEIGHT - 4;
}

function formatHeaderDate(date: Date) {

  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const weekday = weekdays[date.getDay()];
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${weekday}, ${day}/${month}/${year}`;
}

export default function AppointmentGrid() {
  const [appointments, setAppointments] = useState<AppointmentItem[]>(INITIAL_APPOINTMENTS);
  const [activePro, setActivePro] = useState("all");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ client: "", service: "", start: "09:00", end: "09:30", proId: "flavio" });

  const filteredProfessionals = useMemo(
    () => (activePro === "all" ? PROFESSIONALS : PROFESSIONALS.filter((pro) => pro.id === activePro)),
    [activePro]
  );

  const visibleAppointments = useMemo(
    () => appointments.filter((item) => activePro === "all" || item.proId === activePro),
    [appointments, activePro]
  );

  const appointmentsByPro = useMemo(
    () =>
      filteredProfessionals.map((pro) => ({
        ...pro,
        items: visibleAppointments.filter((item) => item.proId === pro.id),
      })),
    [filteredProfessionals, visibleAppointments]
  );

  const dateLabel = useMemo(() => formatHeaderDate(selectedDate), [selectedDate]);

  const changeDay = useCallback((delta: number) => {
    setSelectedDate((current) => {
      const next = new Date(current);
      next.setDate(current.getDate() + delta);
      return next;
    });
  }, []);

  const openModal = useCallback((proId: string, time: string) => {
    setFormData({ client: "", service: "", start: time, end: addMinutes(time, 30), proId });
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const saveAppointment = useCallback(() => {
    const next: AppointmentItem = {
      id: `appt-${Date.now()}`,
      proId: formData.proId,
      client: formData.client || "Novo Cliente",
      service: formData.service || "Serviço",
      start: formData.start,
      end: formData.end,
      status: "Agendado",
      color: "bg-slate-100 border-slate-200 text-slate-900",
    };
    setAppointments((current) => [...current, next]);
    closeModal();
  }, [formData, closeModal]);

  const handleDragStart = useCallback((id: string) => {
    setDraggedId(id);
  }, []);

  const handleDrop = useCallback(
    (proId: string, time: string) => {
      if (!draggedId) return;
      setAppointments((current) =>
        current.map((item) =>
          item.id === draggedId
            ? {
                ...item,
                proId,
                start: time,
                end: addMinutes(time, 30),
              }
            : item
        )
      );
      setDraggedId(null);
    },
    [draggedId]
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex h-screen overflow-hidden">
        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Atendimentos</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Painel de atendimentos</h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => changeDay(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm">
                {dateLabel}
              </div>
              <button
                onClick={() => changeDay(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500">
                <Plus className="w-4 h-4" /> ADICIONAR
              </button>
            </div>
          </header>

          <section className="border-b border-slate-200 bg-white px-8 py-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-700">Filtrar por profissional</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => setActivePro("all")}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      activePro === "all"
                        ? "border-slate-800 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    Todos
                  </button>
                  {PROFESSIONALS.map((pro) => (
                    <button
                      key={pro.id}
                      onClick={() => setActivePro(pro.id)}
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        activePro === pro.id
                          ? "border-slate-800 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {pro.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                <span className="rounded-2xl bg-emerald-100 px-3 py-2 font-semibold text-emerald-800">Confirmados</span>
                <span className="rounded-2xl bg-sky-100 px-3 py-2 font-semibold text-sky-800">Pendente</span>
                <span className="rounded-2xl bg-violet-100 px-3 py-2 font-semibold text-violet-800">Longo horário</span>
              </div>
            </div>
          </section>

          <section className="flex-1 overflow-auto bg-slate-50 px-8 py-6">
            <div className="min-w-[calc(100%+1px)] overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex border-b border-slate-200 bg-slate-100 px-4 py-4">
                <div className="w-[72px]" />
                {appointmentsByPro.map((pro) => (
                  <div key={pro.id} className="flex w-[240px] items-center gap-3 border-l border-slate-200 px-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${pro.accent} text-white shadow-sm`}>
                      {pro.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{pro.name}</p>
                      <p className="text-xs text-slate-500">Especialista</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative flex">
                <aside className="w-[72px] border-r border-slate-200 bg-white">
                  {TIME_SLOTS.map((slot) => (
                    <div key={slot} className="flex h-[46px] items-center justify-end pr-3 text-xs font-semibold text-slate-400">
                      {slot}
                    </div>
                  ))}
                </aside>

                <div className="flex-1">
                  <div className="relative">
                    {appointmentsByPro.map((pro) => (
                      <div key={pro.id} className="relative inline-block align-top border-l border-slate-200" style={{ width: GRID_WIDTH }}>
                        <div className="absolute inset-x-0 top-0 bottom-0">
                          {TIME_SLOTS.map((slot, idx) => (
                            <div
                              key={`${pro.id}-${idx}`}
                              className="h-[46px] border-b border-slate-100"
                              onDragOver={(event) => event.preventDefault()}
                              onDrop={() => handleDrop(pro.id, slot)}
                              onClick={() => openModal(pro.id, slot)}
                            />
                          ))}
                        </div>

                        {pro.items.map((appointment) => {
                          const top = (getMinuteOffset(appointment.start) / SLOT_STEP) * SLOT_HEIGHT;
                          const height = getSlotHeight(appointment.start, appointment.end);
                          return (
                            <div
                              key={appointment.id}
                              draggable
                              onDragStart={() => handleDragStart(appointment.id)}
                              className={`absolute left-3 right-3 rounded-3xl border px-4 py-3 shadow-sm ${appointment.color} cursor-grab transition hover:-translate-y-0.5 hover:shadow-lg`}
                              style={{ top, height }}
                            >
                              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                                <span>{appointment.start} – {appointment.end}</span>
                                <span className="rounded-full bg-white/80 px-2 py-1 text-[10px] text-slate-600">{appointment.status}</span>
                              </div>
                              <div className="mt-3 text-sm font-semibold text-slate-900">{appointment.client}</div>
                              <div className="mt-1 text-xs text-slate-600">{appointment.service}</div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 py-6">
          <div className="w-full max-w-xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Novo Agendamento</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Agendar horário</h2>
              </div>
              <button
                onClick={closeModal}
                className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
              >
                Fechar
              </button>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Profissional
                <select
                  value={formData.proId}
                  onChange={(event) => setFormData((prev) => ({ ...prev, proId: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-400"
                >
                  {PROFESSIONALS.map((pro) => (
                    <option key={pro.id} value={pro.id}>{pro.name}</option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Horário de início
                <input
                  type="time"
                  value={formData.start}
                  onChange={(event) => setFormData((prev) => ({ ...prev, start: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Horário de término
                <input
                  type="time"
                  value={formData.end}
                  onChange={(event) => setFormData((prev) => ({ ...prev, end: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Cliente
                <input
                  value={formData.client}
                  onChange={(event) => setFormData((prev) => ({ ...prev, client: event.target.value }))}
                  placeholder="Nome do cliente"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
                Serviço
                <input
                  value={formData.service}
                  onChange={(event) => setFormData((prev) => ({ ...prev, service: event.target.value }))}
                  placeholder="Corte, Barba, Coloração..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-400"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={saveAppointment}
                className="rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Salvar Agendamento
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
