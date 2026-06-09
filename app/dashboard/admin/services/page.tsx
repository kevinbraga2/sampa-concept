"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ServicesTable from "@/components/ui/ServicesTable";

export default function ServicesPage() {
    return (
        <DashboardLayout>
            {/* O container principal agora usa o Grid correto com largura 100% */}
            <div className="grid grid-cols-1 gap-6 w-full max-w-7xl mx-auto px-4 py-6 md:px-8">
                
                {/* Cabeçalho isolado */}
                <div className="w-full border-b border-gray-100 pb-4">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Serviços</h1>
                    <p className="text-sm text-gray-500 mt-1">Gerenciamento dos serviços oferecidos pelo salão</p>
                </div>                

                {/* Esta div com grid e w-full força a ServicesTable a esticar e alinhar perfeitamente */}
                <div className="grid grid-cols-1 w-full overflow-hidden">
                    <ServicesTable />
                </div>
                
            </div>
        </DashboardLayout>
    );
}
