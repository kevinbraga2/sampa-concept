"use client";

import { useSession } from "next-auth/react";
import {
  Activity,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Crown,
  DollarSign,
  MessageSquare,
  PieChart,
  Scissors,
  Smartphone,
  Target,
  TrendingUp,
  User,
  UserCheck,
  Users,
  XCircle,
  CreditCard,
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const adminStats = [
  {
    name: "Receita Hoje",
    value: "R$ 6.420",
    sub: "R$ 45.320 este mês",
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    name: "Total de Clientes",
    value: "1.258",
    sub: "cadastrados",
    icon: Users,
    color: "bg-purple-500",
  },
  {
    name: "Agendamentos Hoje",
    value: "72",
    sub: "342 este mês",
    icon: Calendar,
    color: "bg-orange-500",
  },
  {
    name: "Profissionais Ativos",
    value: "18",
    sub: "em operação",
    icon: UserCheck,
    color: "bg-blue-500",
  },
  {
    name: "Conversão Hoje",
    value: "82%",
    sub: "concluídos / agendados",
    icon: Target,
    color: "bg-indigo-500",
  },
  {
    name: "Performance API",
    value: "99.8%",
    sub: "uptime",
    icon: Activity,
    color: "bg-emerald-500",
  },
];

const adminBookings = [
  {
    id: "AP-001",
    client: "Marina Souza",
    services: "Corte + Escova",
    total: "R$ 250",
    status: "CONFIRMADO",
  },
  {
    id: "AP-002",
    client: "Lucas Almeida",
    services: "Coloração + Hidratação",
    total: "R$ 420",
    status: "CONCLUIDO",
  },
  {
    id: "AP-003",
    client: "Fernanda Reis",
    services: "Barba + Corte",
    total: "R$ 95",
    status: "PENDENTE",
  },
  {
    id: "AP-004",
    client: "Ricardo Lima",
    services: "Penteado",
    total: "R$ 180",
    status: "CONFIRMADO",
  },
];

const adminProfessionals = [
  { id: "P-01", name: "Ana Silva", category: "Cabeleireira", appointments: 7, rating: 4.9 },
  { id: "P-02", name: "Carlos Santos", category: "Barbeiro", appointments: 5, rating: 4.7 },
  { id: "P-03", name: "Mariana Costa", category: "Colorista", appointments: 4, rating: 4.8 },
];

const proStats = [
  {
    name: "Agendamentos Hoje",
    value: "28",
    change: "+8.2%",
    icon: Calendar,
    color: "bg-blue-500",
  },
  {
    name: "Total de Clientes",
    value: "567",
    change: "+12.4%",
    icon: Users,
    color: "bg-green-500",
  },
  {
    name: "Faturamento Mensal",
    value: "R$ 18.750",
    change: "+18.3%",
    icon: DollarSign,
    color: "bg-purple-500",
  },
  {
    name: "Ocupação",
    value: "92%",
    change: "+5.7%",
    icon: TrendingUp,
    color: "bg-orange-500",
  },
  {
    name: "Comissões",
    value: "R$ 3.250",
    change: "+9.1%",
    icon: CreditCard,
    color: "bg-indigo-500",
  },
  {
    name: "Conversão Marketing",
    value: "24%",
    change: "+4.8%",
    icon: Target,
    color: "bg-pink-500",
  },
];

const proAppointments = [
  { id: 1, client: "Maria Silva", service: "Corte + Escova", time: "09:00", value: "R$ 180", status: "completed" },
  { id: 2, client: "João Santos", service: "Corte Masculino", time: "10:30", value: "R$ 65", status: "completed" },
  { id: 3, client: "Ana Costa", service: "Coloração + Tratamento", time: "14:00", value: "R$ 220", status: "confirmed" },
  { id: 4, client: "Pedro Lima", service: "Barba + Corte", time: "15:30", value: "R$ 85", status: "pending" },
  { id: 5, client: "Carla Souza", service: "Hidratação", time: "16:00", value: "R$ 120", status: "confirmed" },
];

const marketingStats = [
  { name: "Campanhas SMS", sent: 245, opened: 189, conversion: "12%" },
  { name: "E-mail Marketing", sent: 567, opened: 423, conversion: "8%" },
  { name: "WhatsApp", sent: 89, opened: 85, conversion: "32%" },
];

function statusBadge(status: string) {
  switch (status) {
    case "completed":
      return { label: "Concluído", color: "bg-green-100 text-green-800", icon: CheckCircle };
    case "confirmed":
      return { label: "Confirmado", color: "bg-blue-100 text-blue-800", icon: Clock };
    case "pending":
      return { label: "Pendente", color: "bg-orange-100 text-orange-800", icon: XCircle };
    default:
      return { label: status, color: "bg-gray-100 text-gray-800", icon: Clock };
  }
}

function adminStatusBadge(status: string) {
  switch (status) {
    case "CONCLUIDO":
      return { label: "Concluído", color: "bg-green-100 text-green-800" };
    case "CONFIRMADO":
      return { label: "Confirmado", color: "bg-blue-100 text-blue-800" };
    case "PENDENTE":
      return { label: "Pendente", color: "bg-yellow-100 text-yellow-800" };
    case "CANCELADO":
      return { label: "Cancelado", color: "bg-red-100 text-red-800" };
    default:
      return { label: status, color: "bg-gray-100 text-gray-800" };
  }
}

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Crown className="w-6 h-6 text-amber-600" />
            Dashboard Admin
          </h1>
          <p className="text-gray-600">Visão executiva de clientes, agendamentos e finanças.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Analytics</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Configurações</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {adminStats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">{stat.name}</p>
                <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" /> Agendamentos Recentes
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {adminBookings.map((booking) => {
              const badge = adminStatusBadge(booking.status);
              return (
                <div key={booking.id} className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{booking.client}</p>
                    <p className="text-sm text-gray-500">{booking.services}</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="text-sm font-semibold text-gray-900">{booking.total}</span>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-purple-600" /> Profissionais
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {adminProfessionals.map((pro) => (
              <div key={pro.id} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="font-medium text-gray-900">{pro.name}</p>
                  <p className="text-sm text-gray-500">{pro.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{pro.appointments} hoje</p>
                  <p className="text-xs text-yellow-600">★ {pro.rating.toFixed(1)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600" /> Analytics
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Conversão Hoje</span>
              <span className="font-semibold text-green-600">82%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Agendamentos / Mês</span>
              <span className="font-semibold text-blue-600">342</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Receita / Mês</span>
              <span className="font-semibold text-green-600">R$ 45.320</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Clientes Totais</span>
              <span className="font-semibold text-purple-600">1.258</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfessionalDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Crown className="w-6 h-6 text-purple-600" />
            Dashboard Professional
          </h1>
          <p className="text-gray-600">Painel profissional com foco em agendamentos, clientes e marketing.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">App Mobile</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Marketing</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {proStats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">{stat.name}</p>
                <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" /> Agendamentos de Hoje
            </h2>
            <span className="text-sm text-gray-500">Faturamento previsto: R$ 670</span>
          </div>

          <div className="divide-y divide-gray-100">
            {proAppointments.map((appointment) => {
              const badge = statusBadge(appointment.status);
              const Icon = badge.icon;
              return (
                <div key={appointment.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{appointment.client}</p>
                        <p className="text-sm text-gray-500">{appointment.service}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <span className="text-sm font-semibold text-green-600">{appointment.value}</span>
                      <span className="text-sm text-gray-900">{appointment.time}</span>
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${badge.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                        {badge.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-600" /> Marketing
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {marketingStats.map((item) => (
              <div key={item.name} className="px-6 py-4">
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">Enviadas: {item.sent}</p>
                <p className="text-sm text-gray-500">Abertas: {item.opened}</p>
                <p className="text-sm text-gray-500">Conversão: {item.conversion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-black border-t-transparent"></div>
      </div>
    );
  }

  const role = session?.user?.role?.toLowerCase();

  if (!session?.user || (role !== "admin" && role !== "professional")) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 text-center">
        <div className="max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-lg font-semibold text-gray-900">Acesso não autorizado</p>
          <p className="mt-2 text-sm text-gray-600">Faça login com uma conta administrativa ou profissional para acessar o dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      {role === "admin" ? <AdminDashboard /> : <ProfessionalDashboard />}
    </DashboardLayout>
  );
}
