import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Ajuste o import conforme seu projeto
import { LucideIcon } from 'lucide-react';

// 1. Definição da interface para os dados de cada cartão
export interface StatItem {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  iconColorClass?: string; // Ex: 'text-blue-600'
  iconBgClass?: string;    // Ex: 'bg-blue-100'
  valueColorClass?: string; // Ex: 'text-green-600'
}

interface StatsOverviewProps {
  stats: StatItem[];
}

// 2. Componente principal
export const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const IconComponent = item.icon;
        
        // Cores padrão caso não sejam enviadas por prop
        const bgClass = item.iconBgClass || 'bg-blue-100';
        const iconColor = item.iconColorClass || 'text-blue-600';
        const valueColor = item.valueColorClass || 'text-gray-900';

        return (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{item.title}</p>
                  <p className={`text-2xl font-bold ${valueColor}`}>{item.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </div>
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${bgClass}`}>
                  <IconComponent className={`h-6 w-6 ${iconColor}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
