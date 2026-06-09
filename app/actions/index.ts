"use server";


import { db } from "@/lib/db";
import { Professional, ProfessionalService, PaymentMethod, Client, Appointment, AppointmentStatus, Category, Service, Prisma } from "@/prisma/generated/client";
import { sanitizeBrazilianPhone } from "@/lib/utils";

// 1. Defina o tipo combinado para o seu projeto usar onde precisar
export type ProfessionalWithServices = Professional & {
  services: ProfessionalService[];
};

export async function getBusinessHours() {
  try {
    const hours = await db.businessHours.findMany({
      orderBy: {
        dayOfWeek: "asc",
      },
    });

    return {
      success: true,
      data: hours,
    };
  } catch (error) {
    console.error("Failed to fetch business hours", error);

    return {
      success: false,
      error: "Failed to fetch business hours",
    };
  }
}

interface Input {
  professionalId: string;
  date: Date;
  duration: number;
}

export async function getSchedules(dateStr?: string) {
  try {
    const targetDate = dateStr ? new Date(dateStr) : new Date();

    const dayStart = new Date(targetDate);
    dayStart.setHours(0, 0, 0, 0);

    const dayEnd = new Date(targetDate);
    dayEnd.setHours(23, 59, 59, 999);

    const professionals = await db.professional.findMany({
      where: { active: true },
      select: {
        id: true,
        name: true,
        active: true,
        profileImage: true,
        category: true,
        bookings: {
          where: {
            startTime: { gte: dayStart, lte: dayEnd },
          },
          select: {
            id: true,
            startTime: true,
            endTime: true,
            booking: {
              select: {
                id: true,
                status: true,
                client: {
                  select: { name: true, phone: true },
                },
                payments: {
                  select: { amount: true },
                },
              },
            },
            service: {
              select: { name: true, price: true, duration: true },
            },
          },
        },
      },
    });

    // Reshape into the structure AppointmentGrid expects
    return professionals;
    
  } catch (error) {
    console.error("Failed to fetch schedule:", error);
    throw new Error("Failed to load schedule.");
  }
}

export async function getAvailableSlots(professionalId: string, selectedDate: Date) {
  try {
    // 1. Tratamento e normalização da data selecionada
    const startOfDay = new Date(selectedDate);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(selectedDate);
    endOfDay.setHours(23, 59, 59, 999);

    const dateString = selectedDate.toISOString().split("T")[0]; // Retorna "YYYY-MM-DD"
    const dayOfWeek = selectedDate.getDay(); // 0 (Domingo) a 6 (Sábado)
    
    // Nota de ajuste: No seu comentário você marcao 0-6 como Mon-Sun. 
    // O JavaScript nativo mapeia 0 como Domingo e 1 como Segunda. 
    // Certifique-se de salvar no banco seguindo a convenção escolhida.

    // 2. VALIDAÇÃO 1: Verificar se a data é um feriado ou dia de recesso
    const isHoliday = await db.businessHoliday.findUnique({
      where: { date: dateString },
    });

    if (isHoliday) {
      return { success: true, slots: [], message: `Empresa fechada: ${isHoliday.description || "Feriado"}` };
    }

    // 3. VALIDAÇÃO 2: Buscar o horário de funcionamento para este dia da semana
    const currentBusinessHours = await db.businessHours.findUnique({
      where: { dayOfWeek },
    });

    // Se não houver horário configurado para esse dia, assume que a empresa não abre (Ex: Domingos)
    if (!currentBusinessHours) {
      return { success: true, slots: [], message: "Empresa fechada neste dia da semana." };
    }

    // 4. Buscar os serviços agendados que já ocupam o profissional neste dia
    const busyServices = await db.scheduledService.findMany({
      where: {
        professionalId,
        startTime: { gte: startOfDay, lte: endOfDay },
        appointment: {
          status: { not: "CANCELLED" }
        }
      },
      select: { startTime: true, endTime: true }
    });

    // 5. GERADOR DINÂMICO DE SLOTS (Baseado nas regras do banco)
    const slots = [];
    const [startHour, startMinute] = currentBusinessHours.startTime.split(":").map(Number);
    const [endHour, endMinute] = currentBusinessHours.endTime.split(":").map(Number);

    // Cria ponteiros de tempo para controlar o loop de abertura e fechamento
    const currentTimePointer = new Date(selectedDate);
    currentTimePointer.setHours(startHour, startMinute, 0, 0);

    const endTimePointer = new Date(selectedDate);
    endTimePointer.setHours(endHour, endMinute, 0, 0);

    // O loop gera blocos de 30 em 30 minutos dinamicamente
    while (currentTimePointer < endTimePointer) {
      const timeString = currentTimePointer.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Verifica se o ponteiro atual conflita com o horário de algum BookingService do banco
      const isBooked = busyServices.some((service) => {
        const start = new Date(service.startTime);
        const end = new Date(service.endTime);
        return currentTimePointer >= start && currentTimePointer < end;
      });

      slots.push({
        time: timeString,
        isAvailable: !isBooked,
        dateTime: new Date(currentTimePointer),
      });

      // Avança o ponteiro em 30 minutos para a próxima iteração
      currentTimePointer.setMinutes(currentTimePointer.getMinutes() + 30);
    }

    return { success: true, slots };
  } catch (error) {
    console.error("Erro ao calcular blocos dinâmicos:", error);
    return { success: false, error: "Falha ao processar os horários disponíveis." };
  }
}

export async function getAppointments() {
  try {
    const bookings = await db.appointment.findMany({
      include: {
        client: true,
        services: {
          include: {
            service: true,
            professional: true,
          },
        },
        payments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      data: bookings,
    };
  } catch (error) {
    console.error("Failed to fetch bookings", error);

    return {
      success: false,
      error: "Failed to fetch bookings",
    };
  }
}

export async function getAppointmentById(appointmentId: string) {
  try {
    if (!appointmentId) {
      return {
        success: false,
        error: "ID do agendamento não informado.",
      };
    }

    const appointment = await db.appointment.findUnique({
      where: {
        id: appointmentId,
      },
      include: {
        client: true,
        services: {
          include: {
            service: true,
            professional: true,
          },
        },
      },
    });

    if (!appointment) {
      return {
        success: false,
        error: "Agendamento não encontrado.",
      };
    }

    return {
      success: true,
      data: appointment,
    };
  } catch (error) {
    console.error("Failed to fetch appointment by id", error);

    return {
      success: false,
      error: "Falha ao carregar os dados do agendamento.",
    };
  }
}

export async function getAppointmentsByDate(date: Date) {
  try {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const bookings = await db.scheduledService.findMany({
      where: {
        startTime: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        booking: {
          include: {
            client: true,
          },
        },
        service: true,
        professional: true,
      },
      orderBy: {
        startTime: "asc",
      },
    });

    return {
      success: true,
      data: bookings,
    };
  } catch (error) {
    console.error("Failed to fetch bookings", error);

    return {
      success: false,
      error: "Failed to fetch bookings",
    };
  }
}

export async function updateAppointmentStatus(
  appointmentId: string,
  status: AppointmentStatus
) {
  try {
    const appointment = await db.appointment.update({
      where: {
        id: appointmentId,
      },
      data: {
        status,
      },
    });

    return {
      success: true,
      data: appointment,
    };
  } catch (error) {
    console.error("Failed to update booking", error);

    return {
      success: false,
      error: "Failed to update booking",
    };
  }
}


interface CreateAppointmentInput {
  whatsapp?: string;
  whatsApp?: string;
  fullName?: string;
  clientName?: string;
  observations?: string;
  date: string; // Adicionado: "YYYY-MM-DD"
  time: string; // Adicionado: "HH:MM"
  services: {
    serviceId: string;
    professionalId: string;
    startTime?: Date; // Ajustado para opcional (?) conforme seu comentário
    endTime?: Date;   // Ajustado para opcional (?) conforme seu comentário
  }[];
}

export async function createAppointment(input: CreateAppointmentInput) {
  try {
    const sanitizedWhatsapp = sanitizeBrazilianPhone(
      input.whatsapp ?? input.whatsApp ?? ""
    );

    const fullName = input.fullName ?? input.clientName ?? "";
    const observations = "observations" in input ? input.observations : undefined;

    // 1. Fetch all involved services at once
    const services = await db.service.findMany({
      where: { id: { in: input.services.map((s) => s.serviceId) } },
    });
    const serviceMap = new Map(services.map((s) => [s.id, s]));

    // Pointers to calculate the client's timeline inside the salon/clinic
    let currentTimelinePointer = new Date(`${input.date}T${input.time}`);
    let maxParallelEndTime = new Date(currentTimelinePointer);

    // 2. Build and enrich services by calculating their times (Parallel vs Sequential)
    const enrichedServices = input.services.map((s) => {
      const service = serviceMap.get(s.serviceId);
      if (!service) throw new Error(`Serviço ${s.serviceId} não encontrado.`);

      let startTime: Date;

      if (service.overlap) {
        // If it can overlap, start at the current base time alongside the previous service
        startTime = new Date(currentTimelinePointer);
      } else {
        // If it CANNOT overlap, wait for the longest parallel service to finish
        if (maxParallelEndTime > currentTimelinePointer) {
          currentTimelinePointer = new Date(maxParallelEndTime);
        }
        startTime = new Date(currentTimelinePointer);
      }

      // Calculate end time based on duration in minutes
      const endTime = new Date(startTime.getTime() + service.duration * 60000);

      // Update the end time ceiling if this service is longer than the parallel ones
      if (endTime > maxParallelEndTime) {
        maxParallelEndTime = new Date(endTime);
      }

      // If the current service is sequential, the next one must start after it ends
      if (!service.overlap) {
        currentTimelinePointer = new Date(endTime);
      }

      return {
        ...s,
        startTime,
        endTime,
        price: service.price,
        duration: service.duration,
      };
    });

    // 3. Execute atomic transaction to validate professionals and save
    return await db.$transaction(async (tx) => {

      // Ensure NONE of the selected professionals are busy in the global schedule
      for (const s of enrichedServices) {
        const conflict = await tx.scheduledService.findFirst({
          where: {
            professionalId: s.professionalId,
            appointment: { status: { not: "CANCELLED" } },
            startTime: { lt: s.endTime },
            endTime: { gt: s.startTime },
          },
          include: { professional: true },
        });

        if (conflict) {
          throw new Error(`${conflict.professional.fullName} já possui um compromisso neste horário.`);
        }
      }

      // All clear! Create the client (if not exists) and the appointment with linked services
      const totalPrice = enrichedServices.reduce((sum, s) => sum + s.price, 0);
      const startDate = new Date(`${input.date}T${input.time}`);

      const response = await tx.appointment.create({
        data: {
          status: "PENDING",
          observations,
          price: totalPrice,
          date: startDate,
          client: {
            connectOrCreate: {
              where: { whatsapp: sanitizedWhatsapp },
              create: {
                fullName: fullName || sanitizedWhatsapp,
                whatsapp: sanitizedWhatsapp,
              },
            },
          },
          services: {
            create: enrichedServices.map((s) => ({
              serviceId: s.serviceId,
              professionalId: s.professionalId,
              startTime: s.startTime,
              endTime: s.endTime,
              price: s.price,
            })),
          },
        },
      });

      return { success: true, data: response, error: null };
    });

  } catch (error: any) {
    console.error("Failed to create appointment", error);
    return {
      success: false,
      data: null,
      error: error.message.includes("já possui um compromisso")
        ? error.message
        : "Erro interno ao processar o agendamento.",
    };
  }
}

interface Input {
  phone: string;
  name: string;
}

export async function getOrCreateClient(input: Input) {
  try {
    const existingClient = await db.client.findUnique({
      where: {
        whatsapp: input.phone,
      },
    });

    if (existingClient) {
      return {
        success: true,
        data: existingClient,
      };
    }

    const client = await db.client.create({
      data: {
        whatsapp: input.phone,
        fullName: input.name,
      },
    });

    return {
      success: true,
      data: client,
    };
  } catch (error) {
    console.error("Failed to create client", error);

    return {
      success: false,
      error: "Failed to create client",
    };
  }
}

export async function getClientByPhone(maskedPhone: string) {
  try {
    // 1. Limpa o telefone para bater com o padrão salvo no banco (ex: 5511971255628)
    const sanitized = sanitizeBrazilianPhone(maskedPhone);
    
    if (sanitized.length < 12) return null; // Evita buscar com número incompleto

    // 2. Busca o cliente mais recente com esse número
    const client = await db.client.findFirst({
      where: { whatsapp: sanitized },
      select: { id: true, fullName: true } // Traz apenas o necessário
    });

    return client;
  } catch (error) {
    console.error("Failed to fetch client by phone:", error);
    return null;
  }
}

interface Input {
  appointmentId: string;
  amount: number;
  method: PaymentMethod;
}

export async function createPayment(data: Input) {
  try {
    const payment = await db.payment.create({
      data,
    });

    return {
      success: true,
      data: payment,
    };
  } catch (error) {
    console.error("Failed to create payment", error);

    return {
      success: false,
      error: "Failed to create payment",
    };
  }
}

export async function getProfessionals(): Promise<ProfessionalWithServices[]> {
  try {
    return await db.professional.findMany({
      where: { active: true },
      include: { services: true }, // Tráz tudo de uma vez de forma performática
      orderBy: { fullName: "asc" },
    });
  } catch (error) { 
    console.log("Failed to fetch professionals", error);
    return [];
  }
}

export async function getProfessionalsByService(serviceId: string): Promise<Professional[]> {
  try {
    const professionals = await db.professional.findMany({
      where: {
        active: true,
        services: {
          some: {
            serviceId,
          },
        },
      },
      include: {
        services: {
          include: {
            service: true,
          },
        },
      },
    });

    return professionals;

  } catch (error) {

    console.error("Failed to fetch professionals", error);
    return [];
  }
}

export async function getServicesByProfessional(professionalId: string): Promise<Service[]> {
  try {
    // Buscamos os serviços que estão vinculados ao id do profissional recebido
    const services = await db.service.findMany({
      where: {
        active: true, // Apenas serviços ativos no salão
        professionals: {
          some: {
            professionalId: professionalId, // Filtra pela tabela pivot ProfessionalService
          },
        },
      },
      orderBy: {
        name: "asc", // Deixa a lista em ordem alfabética no dropdown
      },
    });

    return services;
    
  } catch (error) {
    console.error("Failed to fetch services by professional", error);
    return [];
  }
}

export async function getHolidays() {
  try {
    const holidays = await db.businessHoliday.findMany({
    
      orderBy: {
        date: "asc",
      },
    });

    return {
      success: true,
      data: holidays,
    };
  } catch (error) {
    console.error("Failed to fetch holidays", error);

    return {
      success: false,
      error: "Failed to fetch holidays",
    };
  }
}

type ServiceCreateData = Prisma.Args<typeof db.service, "create">["data"];

export async function getServices(): Promise<Service[]>{
  try {
    const services = await db.service.findMany({
      where: {
        active: true,
      },
    });

    return services;

  } catch (error) {
    
    console.error("Failed to fetch services", error);

    return [];
  }
}

interface WebServiceInput {
  name: string;
  description: string | null;
  priceInCents: number;     // Recebe em centavos (ex: 5000)
  durationInMinutes: number; // Recebe em minutos (ex: 45)
  category: Category;
}

export async function createService(input: WebServiceInput) {
  try {
    // 1. Monta o payload mapeando os campos da tela para as colunas do banco
    const servicePayload: ServiceCreateData = {
      name: input.name,
      description: input.description,
      price: input.priceInCents,       // Grava como Int em centavos
      duration: input.durationInMinutes, // Grava como Int em minutos
      category: input.category,
      active: true, // Garante que o serviço entra como ativo por padrão
    };

    // 2. Executa a inserção usando a propriedade 'data' correta do Prisma
    const service = await db.service.create({
      data: servicePayload,
    });

    // 3. Retorna o padrão unificado de sucesso
    return {
      success: true,
      data: service,
      error: null
    };

  } catch (error) {
    console.error("Failed to create service:", error);
    
    // 4. Retorna o padrão unificado de erro
    return {
      success: false,
      data: null,
      error: "Não foi possível cadastrar o serviço no banco de dados."
    };
  }
}

interface UpdateServiceInput {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  duration?: number;
  active?: boolean;
}

export async function updateService(data: UpdateServiceInput) {
  try {
    const { id, ...values } = data;

    const service = await db.service.update({
      where: {
        id,
      },
      data: values,
    });

    return {
      success: true,
      data: service,
    };
  } catch (error) {
    console.error("Failed to update service", error);

    return {
      success: false,
      error: "Failed to update service",
    };
  }
}

export async function toggleServiceActive(
  id: string,
  active: boolean
) {
  await db.service.update({
    where: { id },
    data: {
      active,
    },
  });
}
