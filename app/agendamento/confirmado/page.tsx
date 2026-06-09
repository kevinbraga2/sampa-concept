import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getAppointmentById } from "@/app/actions";
import {
    Check,
    Calendar,
    Clock,
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    Download,
    Share2,
    Scissors,
} from "lucide-react";

function formatDate(dateInput?: string | Date) {
    if (!dateInput) return "";
    const date = new Date(dateInput);
    return date.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

function formatTime(dateInput?: string | Date) {
    if (!dateInput) return "";
    const date = new Date(dateInput);
    return date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

function formatPrice(cents: number) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(cents / 100);
}

interface BookingConfirmedProps {
    searchParams: Promise<{
        id?: string;
    }>;
}


export default async function BookingSuccessPage({ searchParams }: BookingConfirmedProps) {
    const { id: appointmentId } = await searchParams;
    const response = appointmentId ? await getAppointmentById(appointmentId) : null;
    const appointment = response?.success ? response.data : null;

    const appointmentServices = appointment?.services?.map((scheduledService) => ({
        name: scheduledService.service?.name ?? "Serviço",
        duration: scheduledService.service?.duration ?? 0,
        price: scheduledService.price,
        professional: scheduledService.professional?.fullName ?? "Profissional",
        startTime: scheduledService.startTime,
        endTime: scheduledService.endTime,
    })) ?? [];

    const firstService = appointmentServices.length > 0 ? appointmentServices[0] : null;
    const startTime = firstService?.startTime ?? appointment?.date;
    const endTime = appointmentServices.length > 0
        ? new Date(Math.max(...appointmentServices.map((service) => new Date(service.endTime).getTime()))).toISOString()
        : undefined;

    return (
        <div className="min-h-screen bg-white">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-lg">
                                <Scissors className="h-5 w-5 rotate-270" color="#c5a059" strokeWidth={2} />
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-bold tracking-tight " >Sampa</span>
                                <span className="text-xs uppercase tracking-widest text-zinc-500">Concept</span>
                            </div>    
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-700">Agendamento # {appointment?.id ?? "—"}</p>
                            <p className="text-sm text-gray-500">Confirmado com sucesso</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-10 w-10 text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-black mb-4">Agendamento Confirmado!</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Seu agendamento foi registrado com sucesso. Verifique abaixo os detalhes reais do seu horário.
                    </p>
                </div>

                <Card className="max-w-2xl mx-auto mb-8 border-gray-200">
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-bold text-black mb-6">Detalhes do Agendamento</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Calendar className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Data e Horário</h3>
                                    <p className="text-gray-600">
                                        {appointment ? formatDate(startTime) : "Não foi possível carregar o horário."}
                                    </p>
                                    <p className="text-gray-600">
                                        {appointment ? `${formatTime(startTime)}${endTime ? ` - ${formatTime(endTime)}` : ""}` : ""}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Local</h3>
                                    <p className="text-gray-600">SampaConcept Itaquera</p>
                                    <p className="text-gray-600">Avenida do Salão, 1234 · São Paulo</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Serviços</h3>
                                    <div className="space-y-2">
                                        {appointmentServices.length > 0 ? (
                                            appointmentServices.map((service, index) => (
                                                <div key={index} className="rounded-xl bg-gray-50 p-3">
                                                    <div className="flex justify-between gap-4">
                                                        <span className="font-medium text-gray-900">{service.name}</span>
                                                        <span className="text-sm text-gray-500">{formatPrice(service.price)}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-500">Duração: {service.duration} minutos</p>
                                                    <p className="text-sm text-gray-500">Profissional: {service.professional}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-gray-600">Nenhum serviço encontrado para este agendamento.</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Contato do Cliente</h3>
                                    <p className="text-gray-600">{appointment?.client.fullName ?? "—"}</p>
                                    <p className="text-gray-600">{appointment?.client.whatsapp ?? "—"}</p>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-medium text-black">Total Pago</span>
                                    <span className="text-2xl font-bold text-black">
                                        {appointment ? formatPrice(appointment.price) : "—"}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Pagamento processado com sucesso</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="max-w-2xl mx-auto space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200">
                            <Download className="h-4 w-4" />
                            Baixar Comprovante
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200">
                            <Share2 className="h-4 w-4" />
                            Compartilhar
                        </button>
                    </div>

                    <Link href="/agendamento" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-200">
                        Fazer Novo Agendamento
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <Card className="max-w-2xl mx-auto mt-8 border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="font-semibold text-black mb-4">Informações Importantes</h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Chegue com 10 minutos de antecedência</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Cancelamentos devem ser feitos com até 2 horas de antecedência</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Em caso de dúvidas, entre em contato com a unidade</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Mail className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>Você receberá um lembrete por email 1 dia antes do agendamento</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <footer className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="text-center text-gray-600">
                        <p className="mb-4">© 2024 SampaConcept. Todos os direitos reservados.</p>
                        <div className="flex items-center justify-center gap-8 text-sm">
                            <a href="#" className="hover:text-black transition-colors font-medium">Termos de Uso</a>
                            <a href="#" className="hover:text-black transition-colors font-medium">Política de Privacidade</a>
                            <a href="#" className="hover:text-black transition-colors font-medium">Suporte</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
