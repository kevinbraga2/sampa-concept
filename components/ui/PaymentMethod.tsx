import { CreditCard } from "lucide-react";

interface PaymentSectionProps {
  totalPrice: number;
  bookingFee?: number; // Opcional, caso a taxa mude. Padrão: 1
}

export const PaymentSection = ({ totalPrice, bookingFee = 1 }: PaymentSectionProps) => {
  const remainingPrice = Math.max(0, totalPrice - bookingFee);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
        <CreditCard className="h-5 w-5" />
        Forma de Pagamento
      </h3>

      {/* Opções de Método de Pagamento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 border-2 border-black rounded-xl bg-gray-50">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="payment" defaultChecked className="w-5 h-5" />
            <div>
              <h4 className="font-bold text-black">PIX</h4>
              <p className="text-sm text-gray-600">Pagamento instantâneo</p>
            </div>
          </label>
        </div>
        
        <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-gray-400 transition-colors cursor-pointer">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="payment" className="w-5 h-5" />
            <div>
              <h4 className="font-bold text-black">Cartão</h4>
              <p className="text-sm text-gray-600">Crédito ou débito</p>
            </div>
          </label>
        </div>
      </div>

      {/* Informativo de Valores Dinâmicos */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 mb-1">
              Como funciona o pagamento
            </h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              • Você paga apenas <strong>R$ {bookingFee.toFixed(2)} como taxa de agendamento</strong>
              <br />
              • O restante (<strong>R$ {remainingPrice.toFixed(2)}</strong>) será pago diretamente na unidade
              <br />
              • Se cancelar com mais de 24h, devolvemos a taxa
            </p>
          </div>
        </div>
      </div>

      {/* Termos de Aceite */}
      <div className="flex items-start gap-3">
        <input type="checkbox" className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-gray-700">
          Aceito os <a href="#" className="text-black font-bold underline">termos de uso</a> e
          <a href="#" className="text-black font-bold underline ml-1">política de privacidade</a>.
          Confirmo que os dados informados estão corretos.
        </p>
      </div>
    </div>
  );
};
