import { Star, Trash2, Clock } from "lucide-react";
import { formatPrice, formatDuration } from "@/lib/utils";

interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  category?: string;
}

interface SelectedServicesSidebarProps {
  selectedServices: Service[];
  removeSelectedService: (id: string) => void;
  subTotal: number;
  totalDuration: number;
  totalPrice: number;
}

export function SelectedServicesSidebar({
  selectedServices,
  removeSelectedService,
  subTotal,
  totalDuration,
  totalPrice,
}: SelectedServicesSidebarProps) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
        <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
          <Star className="h-5 w-5" />
          Seus serviços
        </h3>

        {selectedServices.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-sm">Adicione serviços ao seu combo</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {selectedServices.map((service) => (
                <div key={service.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-black text-sm">{service.name}</h4>
                    <button
                      onClick={() => removeSelectedService(service.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-black">{formatPrice(service.price)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-600">Subtotal:</span>
                <span className="font-bold text-black">{formatPrice(subTotal)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-600 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Duração total:
                </span>
                <span className="font-bold text-black">{formatDuration(totalDuration)}</span>
              </div>
              <div className="bg-black text-white p-3 rounded-lg text-center">
                <div className="text-sm mb-1">Valor Total</div>
                <div className="text-2xl font-black">{formatPrice(totalPrice)}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}