import { Scissors, Calendar, CreditCard, Check, UsersRound } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: Scissors,
    shortLabel: "Serviços",
    title: "Seus Serviços",
    desc: "Configure seu atendimento"
  },
  {
    num: 2,
    icon: Calendar,
    shortLabel: "Data/Hora",
    title: "Agendamento",
    desc: "Data e horário ideais"
  },
  {
    num: 3,
    icon: UsersRound,
    shortLabel: "Profissional",
    title: "Porofissional",
    desc: "Escolha o profissional"
  },
  {
    num: 4,
    icon: CreditCard,
    shortLabel: "Pagamento",
    title: "Confirmação",
    desc: "Dados e pagamento"
  }
];

const totalSteps = steps.length; // 4 steps in total

export function DesktopProgressBar({ step }: { step: number }){
 
  return (
    <div className="hidden sm:block">
      <div className="flex items-center justify-between mb-4">
        {steps.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.num} className="flex items-center">
              <div
                className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                  step >= item.num
                    ? "bg-black border-black text-white shadow-lg scale-110"
                    : step === item.num
                    ? "bg-white border-black text-black shadow-md scale-105"
                    : "border-gray-300 text-gray-400 bg-white"
                }`}
              >
                {step > item.num ? (
                  <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : step === item.num ? (
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                )}

                {step === item.num && (
                  <div className="absolute inset-0 rounded-full border-2 border-black animate-ping opacity-20"></div>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="relative mx-2 sm:mx-4 w-8 sm:w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`absolute left-0 top-0 h-full bg-black rounded-full transition-all duration-500 ${
                      step > item.num ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between">
        {steps.map((item, index) => (
          <div key={index} className="text-center flex-1 px-1">
            <div
              className={`text-xs sm:text-sm font-semibold transition-colors ${
                step >= index + 1 ? "text-black" : "text-gray-400"
              }`}
            >
              {item.shortLabel}
            </div>
            <div className="text-xs text-gray-500 mt-1 hidden lg:block">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export function MobileProgressBar({ step }: { step: number }) {

    const progress = ((step - 1) / totalSteps) * 100; // Calcula o progresso com base na etapa atual (step) e no total de etapas (totalSteps)
    const description =  steps[step - 1] || { desc: "" }; // Fallback para evitar erros caso step seja inválido

    return (
        <div className="block sm:hidden">
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-black">
                Etapa {step} de {totalSteps}
                </span>
                <span className="text-xs text-gray-500">
                {Math.round(progress)}% concluído
                </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                className="bg-black h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
                />
            </div>

            <div className="mt-2 text-center">
                <div className="text-sm font-semibold text-black">
                {description.desc}
                </div>
            </div>
        </div>
    );
}