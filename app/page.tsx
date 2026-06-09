"use client";

import React from 'react';
import Link from 'next/link';
import { Scissors } from "lucide-react";

// Componentes inline inspirados nas primitivas do Shadcn/ui para máxima portabilidade
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' }>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase h-11 px-8";
    const variants = {
      default: "bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800",
      outline: "border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 text-zinc-700"
    };
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className || ''}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-xl border border-zinc-100 bg-white text-zinc-950 shadow-sm p-6 ${className || ''}`} {...props} />
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans antialiased selection:bg-zinc-900 selection:text-white">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                  <Scissors className="h-5 w-5 sm:h-6 sm:w-6 rotate-270" color="#c5a059" strokeWidth={2}  />
              </div>
              <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold tracking-tight " >Sampa</span>
                  <span className="text-xs uppercase tracking-widest text-zinc-500">Concept</span>
              </div>       
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-zinc-500 tracking-wide">
            <div className="flex items-center gap-1.5 rounded-full border border-zinc-100 bg-zinc-50/50 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Atendimento 24h
            </div>
          </div>
        </div>
      </header>

      

      {/* HERO SECTION */}
      <section className="container max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-28 md:pb-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* TEXT CONTENT & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
          <div className="inline-flex items-center rounded-full border border-zinc-200/60 bg-zinc-50 px-3 py-1 text-[10px] font-medium tracking-wider uppercase text-zinc-500">
            Plataforma Oficial de Agendamento
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.15] text-zinc-900">
            Estilo impecável, <br />
            <span className="font-medium text-zinc-800">reservado em segundos.</span>
          </h1>
          
          <p className="text-sm md:text-base text-zinc-500 max-w-xl leading-relaxed font-light">
            Do corte clássico à nanoreconstrução capilar avançada. Escolha seus procedimentos, selecione seu profissional favorito e controle seus horários com total autonomia.
          </p>

          <div className="pt-2 w-full sm:w-auto">
            {/* Redirecionamento limpo para a sua rota interna completa */}
            <Link href="/agendamento" passHref >
              <Button  className="w-full sm:w-auto cursor-pointer">
                <a>Iniciar Agendamento</a>
              </Button>
            </Link>
          </div>
        </div>

        {/* VISUAL PLACEHOLDER / HERO IMAGE */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/50 shadow-md">
          <img 
            src="https://unsplash.com" 
            alt="Interior do salão Sampa Concept com estética minimalista e moderna" 
            className="w-full h-full object-cover grayscale-[15%] contrast-[102%] hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />
        </div>

      </section>

      {/* VALUE PROPOSITION / FEATURES SECTION */}
      <section className="bg-zinc-50/50 border-t border-b border-zinc-200/40 py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            <Card className="border-none bg-transparent shadow-none p-0 space-y-3">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">01 / Autonomia</div>
              <h3 className="text-sm font-medium tracking-tight text-zinc-900">Seu profissional preferido</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Acesse a agenda em tempo real dos nossos melhores especialistas e garanta atendimento exclusivo com quem já conhece seu estilo.
              </p>
            </Card>

            <Card className="border-none bg-transparent shadow-none p-0 space-y-3">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">02 / Praticidade</div>
              <h3 className="text-sm font-medium tracking-tight text-zinc-900">Sem chamadas, sem espera</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Esqueça mensagens no WhatsApp ou ligações perdidas. Monte seu carrinho de serviços e confirme seu horário instantaneamente.
              </p>
            </Card>

            <Card className="border-none bg-transparent shadow-none p-0 space-y-3">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">03 / Flexibilidade</div>
              <h3 className="text-sm font-medium tracking-tight text-zinc-900">Gestão simplificada</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Precisa mudar os planos? Reagende ou cancele seu compromisso diretamente pela plataforma de forma transparente.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-400">
        <div className="font-light">
          &copy; {new Date().getFullYear()} Sampa Concept. Todos os direitos reservados.
        </div>
        <div className="flex items-center gap-2 font-medium text-zinc-500">
          <span className="text-[9px] border border-zinc-200 bg-white rounded-md px-1.5 py-0.5 shadow-sm text-zinc-400">🔒 SSL</span>
          Ambiente de Agendamento Seguro
        </div>
      </footer>

    </div>
  );
}
