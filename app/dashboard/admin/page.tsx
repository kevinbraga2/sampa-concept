import { db } from "@/lib/db";
import {
  Calendar, Users, DollarSign, CheckCircle,
  BarChart3, Crown, Target, Shield,
  PieChart, Zap, Activity, UserCheck, Settings
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

// ─── Data fetching ────────────────────────────────────────────────────────────

async function getDashboardData() {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const [
    totalClients,
    totalProfessionals,
    todayBookings,
    monthBookings,
    completedPayments,
    monthPayments,
    recentBookings,
    professionalsRaw,
    completedToday,
  ] = await Promise.all([
    db.client.count(),

    db.professional.count({ where: { active: true } }),

    db.appointment.count({
      where: { createdAt: { gte: startOfToday } },
    }),

    db.appointment.count({
      where: { createdAt: { gte: startOfMonth } },
    }),

    db.payment.aggregate({
      _sum: { amount: true },
      where: { createdAt: { gte: startOfToday } },
    }),

    db.payment.aggregate({
      _sum: { amount: true },
      where: { createdAt: { gte: startOfMonth } },
    }),

    db.appointment.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: {
        client: true,
        services: {
          include: { service: true, professional: true },
        },
        payments: true,
      },
    }),

    db.professional.findMany({
  where: { active: true },
  include: {
    appointments: {
      where: { startTime: { gte: startOfToday } },
      select: { id: true },
    },
  },
  orderBy: { createdAt: "asc" },
}),

    db.appointment.count({
      where: {
        status: "COMPLETED",
        createdAt: { gte: startOfToday },
      },
    }),
  ]);

const professionals = professionalsRaw.map(({ appointments, ...pro }) => ({
  ...pro,
  scheduledServicesCount: appointments.length,
}));

  const totalRevenueToday = (completedPayments._sum.amount ?? 0) / 100;
  const totalRevenueMonth = (monthPayments._sum.amount ?? 0) / 100;
  const conversionRate =
    todayBookings > 0 ? Math.round((completedToday / todayBookings) * 100) : 0;

  return {
    totalClients,
    totalProfessionals,
    todayBookings,
    monthBookings,
    totalRevenueToday,
    totalRevenueMonth,
    conversionRate,
    recentBookings,
    professionals,
  };
}
// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatCurrency(cents: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents);
}

function statusColor(status: string) {
  switch (status) {
    case "CONCLUIDO":   return "bg-green-100 text-green-800";
    case "CONFIRMADO":  return "bg-blue-100 text-blue-800";
    case "PENDENTE":    return "bg-yellow-100 text-yellow-800";
    case "CANCELADO":   return "bg-red-100 text-red-800";
    default:            return "bg-gray-100 text-gray-800";
  }
}

function statusLabel(status: string) {
  const map: Record<string, string> = {
    CONCLUIDO: "Concluído",
    CONFIRMADO: "Confirmado",
    PENDENTE: "Pendente",
    CANCELADO: "Cancelado",
  };
  return map[status] ?? status;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function EnterpriseDashboard() {
  const data = await getDashboardData();

  const stats = [
    {
      name: "Receita Hoje",
      value: formatCurrency(data.totalRevenueToday),
      sub: `${formatCurrency(data.totalRevenueMonth)} este mês`,
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      name: "Total de Clientes",
      value: data.totalClients.toLocaleString("pt-BR"),
      sub: "cadastrados",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      name: "Agendamentos Hoje",
      value: data.todayBookings,
      sub: `${data.monthBookings} este mês`,
      icon: Calendar,
      color: "bg-orange-500",
    },
    {
      name: "Profissionais Ativos",
      value: data.totalProfessionals,
      sub: "em operação",
      icon: UserCheck,
      color: "bg-blue-500",
    },
    {
      name: "Conversão Hoje",
      value: `${data.conversionRate}%`,
      sub: "concluídos / agendados",
      icon: Target,
      color: "bg-indigo-500",
    },
    {
      name: "Performance",
      value: "99.8%",
      sub: "uptime API",
      icon: Activity,
      color: "bg-green-600",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Crown className="w-6 h-6 text-amber-600" />
              Dashboard Enterprise
            </h1>
            <p className="text-gray-600">Visão executiva completa de todas as operações</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm">
              <PieChart className="w-4 h-4" />
              Analytics
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
              <Settings className="w-4 h-4" />
              Configurações
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${stat.color} flex-shrink-0`}>
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 truncate">{stat.name}</p>
                  <p className="text-lg font-semibold text-gray-900 leading-tight">{stat.value}</p>
                  <p className="text-xs text-gray-400 truncate">{stat.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Recent Bookings */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                Agendamentos Recentes
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {data.recentBookings.length === 0 ? (
                <p className="text-sm text-gray-500 p-6">Nenhum agendamento encontrado.</p>
              ) : (
                data.recentBookings.map((booking) => {
                  const total = booking.payments.reduce((sum, p) => sum + p.amount, 0);
                  const serviceNames = booking.services.map((s) => s.service.name).join(", ");
                  return (
                    <div key={booking.id} className="flex items-center justify-between px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {booking.client.fullName ?? booking.client.whatsapp}
                        </p>
                        <p className="text-xs text-gray-500">{serviceNames || "Sem serviços"}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">{formatCurrency(total / 100)}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor(booking.status)}`}>
                          {statusLabel(booking.status)}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Professionals */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-purple-600" />
                Profissionais
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {data.professionals.length === 0 ? (
                <p className="text-sm text-gray-500 p-6">Nenhum profissional ativo.</p>
              ) : (
                data.professionals.map((pro) => (
                  <div key={pro.id} className="flex items-center justify-between px-6 py-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{pro.fullName}</p>
                      <p className="text-xs text-gray-500">{pro.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">
                        {pro.scheduledServicesCount} hoje
                      </p>
                      {pro.rating && (
                        <p className="text-xs text-yellow-600">★ {pro.rating.toFixed(1)}</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Analytics */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              Analytics
            </h3>
            <div className="space-y-3">
              {[
                { label: "Conversão Hoje", value: `${data.conversionRate}%`, color: "text-green-600" },
                { label: "Agendamentos / Mês", value: data.monthBookings, color: "text-blue-600" },
                { label: "Receita / Mês", value: formatCurrency(data.totalRevenueMonth), color: "text-green-600" },
                { label: "Clientes Totais", value: data.totalClients.toLocaleString("pt-BR"), color: "text-purple-600" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{item.label}</span>
                  <span className={`text-sm font-semibold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}