import { ArrowRight } from "lucide-react"; // Assuming you're using lucide-react

interface StepNavigationProps {
  onNext: () => void;
  onBack: () => void;
  canContinue: boolean;
  showBack?: boolean; 
}

export function StepNavigation({ onNext, onBack, canContinue, showBack }: StepNavigationProps) {

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
      {showBack && (
        <button
          onClick={onBack}
          type="button"
          className="order-2 sm:order-1 w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Voltar
        </button>
      )}

      <button
        onClick={onNext}
        disabled={!canContinue}
        className="order-1 sm:order-2 w-full sm:w-auto px-6 sm:px-8 py-3 bg-black text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2">
        <ArrowRight className="h-4 w-4" />
        Continuar
      </button>
    </div>
  );
}