"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Actions
import { createAppointment, getServices , getProfessionals, getBusinessHours } from "@/app/actions";

// Icons
import { Scissors, Clock, Phone, Shield } from "lucide-react";

// UI Components
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { PageLoader } from "@/components/ui/Loading"; 
import { DesktopProgressBar, MobileProgressBar } from "@/components/ui/ProgressBar";
import { ChooseProfessional } from "@/components/ui/ChooseProfessional";
import { StepServices } from "@/components/ui/StepServices";
import { StepScheduling } from "@/components/ui/StepScheduling";
import { StepPayment } from "@/components/ui/StepPayment";
import { SelectedServicesSidebar } from "@/components/ui/SelectedServicesSidebar";
import { StepNavigation } from "@/components/ui/StepNavigation";

// Types
import { Prisma, Service, Professional } from "@/prisma/generated/client"; 

type ProfessionalWithServices = Prisma.ProfessionalGetPayload<{
  include: { services: true };
}>;

type AppointmentService = {
  serviceId: string;
  professionalId: string;
};

type Appointment = {
  totalDuration: string;
  totalPrice: string;
  fullName: string;
  whatsApp: string;
  date: string;
  time: string;
  observations: string;
  services: AppointmentService[];
};

export default function SchedulingPage() {

    const router = useRouter();

    const [appointment, setAppointment] = useState<Appointment>({
        totalDuration: '',
        totalPrice: '',
        fullName: '',
        whatsApp: '',
        date: '',
        time: '',
        observations: '',
        services: [],
    });

    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
  
    const [professionals, setProfessionals] = useState<ProfessionalWithServices[]>([]);

    const [services, setServices] = useState<Service[]>([]);

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Add 1 to get standard 1-12 format

    const canGoBack = (): boolean => {
        if (step === 1) { return false; } return true;
    };
    
    const canContinue = () => {
        switch (step) {
            case 1:
                // Validates that the nested services array has at least one selection
                return appointment.services.length > 0;
                
            case 2:
                // Validates that every chosen service item has a professionalId assigned to it
                return appointment.services.length > 0 && 
                    appointment.services.every(s => s.professionalId !== '');
                    
            case 3:
                // Validates that both the top-level date and time strings are filled out
                return !!appointment.date && !!appointment.time;
                
            case 4:
                // Personal info step: requires full name and a WhatsApp contact number
                return !!appointment.fullName.trim() && !!appointment.whatsApp.trim();
                
            default:
                return false;
        }
    };

    useEffect(() => {
    // Dispara ambas as requisições em paralelo
        Promise.all([getServices(), getProfessionals()])
            .then(([servicesData, professionalsData]) => {
            // O TypeScript/JavaScript desestrutura o resultado na mesma ordem
            setServices(servicesData);
            setProfessionals(professionalsData);
            })
            .catch((error) => {
            console.error("Erro ao carregar os dados iniciais:", error);
            // Aqui você pode colocar um estado de erro, se tiver (ex: setHasError(true))
            })
            .finally(() => {
            // Desativa o loading apenas quando AMBAS as requisições terminarem (com sucesso ou falha)
            setIsLoading(false);
        });
    }, []);

    
    // Scroll to top on step change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step]);

    const addSelectedService = (service: Service) => {
        setAppointment((prev) => {
            if (prev.services.some(s => s.serviceId === service.id)) return prev;
            return { ...prev, services: [...prev.services, { serviceId: service.id, professionalId: '' }] };
        });
    };

    const removeSelectedService = (serviceId: string) => {
        setAppointment((prev) => {
            return { ...prev, services: prev.services.filter(s => s.serviceId !== serviceId) };
        });
    };

    // 1. Cross-reference: Filter the master list using only the IDs chosen by the user
    const selectedServicesDetails = services.filter((masterService) =>
    appointment.services.some((selected) => selected.serviceId === masterService.id)
    );

    // 2. Sum the durations up dynamically from the found matches
    const totalDuration = selectedServicesDetails.reduce((sum, item) => sum + (item.duration || 0), 0);

    // 3. Sum the prices up dynamically from the found matches
    const totalPrice = selectedServicesDetails.reduce((sum, item) => sum + (item.price || 0), 0);

    // 2. Sum up all durations dynamically (assumes your backend duration is a number, e.g., 30, 45, 60)

    const subTotal = totalPrice 

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await createAppointment({
                whatsapp: appointment.whatsApp,
                fullName: appointment.fullName,
                observations: appointment.observations,
                date: appointment.date,
                time: appointment.time,
                services: appointment.services,
            });

            if (!response.success || !response.data?.id) {
                throw new Error(response.error || "Erro ao criar agendamento.");
            }
            
            router.push(`/agendamento/confirmado?id=${response.data.id}`);
        } catch (error: any) {
            console.error("Erro ao criar agendamento:", error);
            alert(error?.message || "Ocorreu um erro ao criar seu agendamento. Por favor, tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                                <Scissors className="h-5 w-5 sm:h-6 sm:w-6 rotate-270" color="#c5a059" strokeWidth={2}  />
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-bold tracking-tight " >Sampa</span>
                                <span className="text-xs uppercase tracking-widest text-zinc-500">Concept</span>
                            </div>       
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 sm:px-4 py-2 rounded-full">
                                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
                                <span className="font-medium text-xs sm:text-sm">Pagamento Seguro SSL</span>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span className="hidden sm:inline">Atendimento 24h</span>
                                    <span className="sm:hidden">24h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Progress Bar */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <MobileProgressBar step={step} />
                    <DesktopProgressBar step={step} />
                </div>
            </div>
            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className={`grid grid-cols-1 gap-6 sm:gap-8 ${step !== 4 ? "lg:grid-cols-3" : ""}`}>
                     {/* LADO ESQUERDO: Conteúdo das Etapas (Ocupa 2 colunas) */}
                    <div className="lg:col-span-2 order-2 lg:order-1">
                        {step === 1 && (
                            <StepServices
                                services={services}
                                addSelectedService={addSelectedService}
                            />
                        )}
                        {step === 3 && (
                            <StepScheduling
                                appointment={appointment}
                                services={services}
                                professionals={professionals}
                                setAppointment={setAppointment}
                            />
                        )}
                        {step === 2 && (
                            <ChooseProfessional
                                professionals={professionals}
                                appointment={appointment}
                                services={services}
                                setAppointment={setAppointment}
                            />
                        )}
                        {step === 4 && (
                            <StepPayment
                                appointment={appointment}
                                professionals={professionals}
                                services={services}
                                setAppointment={setAppointment}
                            />
                        )}
                        <div className="mt-8"> 
                            <StepNavigation
                                onNext={step === 4 ? handleSubmit : () => setStep(step + 1)}
                                onBack={() => setStep(step - 1)}
                                canContinue={canContinue()}
                                showBack={canGoBack()}      
                            />
                        </div>
                    </div>        

                    {/* LADO DIREITO: Sidebar (Só renderiza se for a etapa 1) */}
                    {step === 1 && (
                        <div className="lg:col-span-1 order-1 lg:order-2 lg:sticky lg:top-8">
                            <SelectedServicesSidebar
                                selectedServices={services.filter((masterService) =>
                                    appointment.services.some((selected) => selected.serviceId === masterService.id)
                                )}
                                removeSelectedService={removeSelectedService}
                                subTotal={subTotal}
                                totalDuration={totalDuration}
                                totalPrice={totalPrice}
                            />
                        </div>
                    )}    
                </div>
            </div>
            {/* Footer */}
            <footer className="bg-gradient-to-t from-gray-100 to-gray-50 border-t border-gray-200 mt-12 sm:mt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="text-center">
                        {/* Security & Contact */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4" />
                                <span>Pagamentos Seguros</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>(11) 2523-3173</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>Atendimento 24h</span>
                            </div>
                        </div>
                        {/* Copyright */}
                        <div className="border-t border-gray-200 pt-4 sm:pt-6">
                            <p className="text-gray-500 text-xs sm:text-sm text-center">
                                Ipsum Lore
                                <span className="block sm:inline mx-0 sm:mx-2 mt-1 sm:mt-0">
                                    <span className="hidden sm:inline">•</span>
                                    CNPJ: 12.345.678/0001-90
                                </span>
                                <ScrollToTop />
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
