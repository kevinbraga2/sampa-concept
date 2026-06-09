"use client";

import { useSession } from "next-auth/react"; // 1. Importe o hook useSession
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // 2. Capture os dados da sessão e o status de carregamento do Auth.js
  const { data: session, status } = useSession();

  // 3. Substitui o seu estado manual. Enquanto o Auth.js lê o cookie, exibe o loading
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!session?.user?.role) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 text-center">
        <div className="max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-lg font-semibold text-gray-900">Acesso não autorizado</p>
          <p className="mt-2 text-sm text-gray-600">Faça login para acessar o painel.</p>
        </div>
      </div>
    );
  }

  // 4. Extrai o nome do usuário de dentro da sessão (com fallback caso não encontre)
  const user = session?.user?.name || "";
  const role = (session.user.role.toLowerCase()) as "professional" | "admin";

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar role={role} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* 5. Injeta o nome do usuário coletado da sessão diretamente no Header */}
        <DashboardHeader role={role} user={user} />
        
        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
