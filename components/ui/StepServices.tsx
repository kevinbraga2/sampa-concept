import { Scissors, Plus, Sparkles } from "lucide-react";
import { formatPrice, formatDuration } from "@/lib/utils";
import { Service, Category } from "@/prisma/generated/client";


interface StepServicesProps {
  services: Service[];
  addSelectedService: (service: Service) => void;
}

function getCategoryDisplay(category?: Category) {
  if (category ===  Category.HAIR) {
    return { icon: Scissors, label: "Salão" };
  } 
  return { icon: Sparkles , label: "Estética" };
}

export function StepServices({ services, addSelectedService }: StepServicesProps) {
  const categories = [...new Set(services.map((s) => s.category))];

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
          {categories.map((category) => {
            const { icon: Icon, label } = getCategoryDisplay(category);
            const categoryServices = services.filter((s) => s.category === category);

            return (
              <div key={category} className="mb-8">
                {/* Category Header */}
                <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                  <Icon className="h-5 w-5 " color="#c5a059" />
                  {label}
                </h3>

                {/* Services List */}
                <div className="space-y-3">
                  {categoryServices.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
                    >
                     {/* Service Info */}
                    <div className="flex-1">
                    <h4 className="font-semibold text-black">{service.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        {/* Only show price and bullet if price is greater than 0 */}
                        {service.price > 0 && (
                        <>
                          <span className="font-medium">{formatPrice(service.price)}</span>
                          <span>•</span>
                        </>
                        )}
                        <span>{formatDuration(service.duration)}</span>
                    </div>
                    </div>
                      {/* Add Button */}
                      <button
                        onClick={() => addSelectedService(service)}
                        className="ml-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-2 whitespace-nowrap"
                      >
                        <Plus className="h-4 w-4" />
                        Adicionar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}