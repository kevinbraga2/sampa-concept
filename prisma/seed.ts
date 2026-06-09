import { db } from "@/lib/db";
import { Category, Role } from "@/prisma/generated/client/edge";
import bcrypt from "bcryptjs";

async function clearDatabase() {
  console.log("🧹 Emptying database...");

  await db.scheduledService.deleteMany();
  await db.appointment.deleteMany();
  await db.service.deleteMany();
  await db.professional.deleteMany();
  await db.businessHours.deleteMany();
  await db.client.deleteMany();
  await db.user.deleteMany();
}

async function seedServices() {

    console.log("✂️ Seeding services...");

    const services = [
    // Salão Services
  {
    name: "Avaliação",
    description: "Avaliação técnica capilar",
    price: 0, 
    duration: 30,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Banho de Petroleo",
    description: "Realce de cor e brilho para fios escuros",
    price: 15000,
    duration: 90,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Bi-Redensific Tratamento Nanoreconstrutor",
    description: "Aplicação feita antes da escovação criando uma proteção e cauterização dos fios",
    price: 5000,
    duration: 30,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Botox",
    description: "Redução de volume e alinhamento dos fios",
    price: 15000,
    duration: 90,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Cauterização Longa",
    description: "Tratamento de reconstrução para cabelos longos",
    price: 18000,
    duration: 120,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Cauterização Média",
    description: "Tratamento de reconstrução para cabelos médios",
    price: 15000,
    duration: 120,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Corte Com Escova",
    description: "Corte feminino com finalização em escova",
    price: 12000,
    duration: 90,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Corte Com Secagem",
    description: "Corte feminino com secagem simples",
    price: 10000,
    duration: 60,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Corte Feminino (não Quero Secar)",
    description: "Corte feminino sem finalização",
    price: 8000,
    duration: 60,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Corte Masculino",
    description: "Corte masculino clássico ou moderno",
    price: 5000,
    duration: 60,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Corte Masculino Com Luzes",
    description: "Combo corte e reflexos",
    price: 13000,
    duration: 120,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Corte Masculino Com Progressiva",
    description: "Combo corte e alinhamento capilar",
    price: 12000,
    duration: 120,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Corte Masculino Com Relaxamento",
    description: "Combo corte e relaxamento de fios",
    price: 12000,
    duration: 90,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Corte Uma Máquina",
    description: "Corte raspado uniforme com uma máquina",
    price: 4000,
    duration: 30,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Cronograma Erik Kened",
    description: "3 dias de tratamento (Hidratação, Nutrição e Reconstrução) 1 por semana",
    price: 25000,
    duration: 50,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Escova Curta",
    description: "Lavagem e escovação para cabelos curtos",
    price: 6000,
    duration: 50,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Escova Longa",
    description: "Lavagem e escovação para cabelos longos",
    price: 8000,
    duration: 80,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Escova Longa Com Prancha",
    description: "Lavagem, escova e finalização com chapinha",
    price: 12000,
    duration: 90,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Escova Média",
    description: "Lavagem e escovação para cabelos médios",
    price: 7000,
    duration: 60,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Escova Progressiva",
    description: "Alinhamento capilar de longa duração",
    price: 22000,
    duration: 150,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Escova Progressiva Curta",
    description: "Progressiva para cabelos curtos",
    price: 18000,
    duration: 135,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Escova Progressiva Sem Formol",
    description: "Alinhamento orgânico sem formol",
    price: 22000,
    duration: 180,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Escova Semi-definitiva",
    description: "Alinhamento intenso de longa durabilidade",
    price: 30000,
    duration: 180,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Franja",
    description: "Corte e ajuste apenas da franja",
    price: 2500,
    duration: 15,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Hidratação",
    description: "Reposição de água e brilho",
    price: 7000,
    duration: 60,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Hidratação Erik Kened",
    description: "Tratamento de hidratação premium",
    price: 10000,
    duration: 50,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Luzes",
    description: "Técnica de clareamento por mechas",
    price: 40000,
    duration: 180,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Matização",
    description: "Correção de tom para cabelos loiros ou com luzes",
    price: 9000,
    duration: 60,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Nutrição",
    description: "Reposição de óleos e nutrientes",
    price: 9000,
    duration: 60,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Ombré",
    description: "Clareamento gradual das pontas",
    price: 50000,
    duration: 300,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Pacote Cronograma Capilar",
    description: "Combo: 2 reconstruções, 2 nutrições e 1 hidratação",
    price: 39900,
    duration: 80,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Reconstrução",
    description: "Reposição de queratina e massa capilar",
    price: 10000,
    duration: 70,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Retoque de Raiz",
    description: "Aplicação de coloração apenas na raiz crescida",
    price: 10000,
    duration: 90,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Tintura Curta",
    description: "Coloração completa para cabelos curtos",
    price: 12000,
    duration: 60,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Tintura Longa",
    description: "Coloração completa para cabelos longos",
    price: 15000,
    duration: 120,
    category: Category.HAIR,
    active: true,
  },
  {
    name: "Tratamento Detox Couro Cabeludo",
    description: "Limpeza profunda e controle de oleosidade",
    price: 12000,
    duration: 60,
    category: Category.HAIR,
    active: true,
  },
  // Estética Services
  {
    name: "Blindagem de Unha",
    description: "Fortalecimento e proteção das unhas naturais",
    price: 6000,
    duration: 90,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Blindagem de Unha Esmaltação Comum",
    description: "Blindagem finalizada com esmalte tradicional",
    price: 7500,
    duration: 120,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Blindagem de Unha Esmaltação Em Gel",
    description: "Blindagem finalizada com esmalte em gel de alta durabilidade",
    price: 9500,
    duration: 165,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Brown Lamination",
    description: "Alinhamento e design dos fios das sobrancelhas",
    price: 9000,
    duration: 90,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Cílios Fox Eyes",
    description: "Modelo de extensão que alonga e delineia o olhar",
    price: 14000,
    duration: 180,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Cílios Lash Lifting",
    description: "Curvatura natural dos fios com durabilidade de 3 a 8 semanas",
    price: 11000,
    duration: 90,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Cílios Luxo 5D",
    description: "Extensão de cílios com volume intenso 5D",
    price: 15000,
    duration: 150,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Cílios Volume Brasileiro",
    description: "Extensão de cílios com técnica volume brasileiro",
    price: 11000,
    duration: 150,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Cílios Volume Chocolate",
    description: "Extensão de cílios em tons de marrom para aspecto natural",
    price: 12000,
    duration: 150,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Cílios Volume Egípcio",
    description: "Extensão de cílios com técnica volume egípcio",
    price: 13000,
    duration: 150,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Depilaçao Virília Íntima",
    description: "Depilação íntima feminina",
    price: 8000,
    duration: 40,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Depilação Axila",
    description: "Depilação das axilas",
    price: 3500,
    duration: 30,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Depilação Buço",
    description: "Remoção de pelos do buço",
    price: 2500,
    duration: 30,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Depilação Completa",
    description: "Pacote de depilação corporal completa",
    price: 25000,
    duration: 90,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Depilação Meia Perna",
    description: "Depilação do joelho aos pés",
    price: 5000,
    duration: 30,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Depilação Parcial",
    description: "Combo: virilha, axila e meia perna",
    price: 16500,
    duration: 60,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Depilação Perna Inteira",
    description: "Depilação completa das pernas",
    price: 10000,
    duration: 40,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Depilação do Rosto",
    description: "Depilação facial completa",
    price: 9000,
    duration: 60,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Design Masculino",
    description: "Design e limpeza de sobrancelhas masculina",
    price: 2500,
    duration: 40,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Design de Sobrancelhas",
    description: "Design estratégico para harmonização facial",
    price: 4000,
    duration: 40,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Design de Sobrancelhas Com Henna",
    description: "Design finalizado com aplicação de henna",
    price: 5500,
    duration: 50,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Design de Sobrancelhas Com Tintura",
    description: "Design finalizado com coloração dos fios",
    price: 6000,
    duration: 45,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Esmaltação Em Gel",
    description: "Aplicação de esmalte em gel com secagem em cabine",
    price: 6500,
    duration: 180,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Esmaltação Normal",
    description: "Esmaltação simples (sem cuticulagem)",
    price: 3000,
    duration: 30,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Manutenção Fox Eyes",
    description: "Manutenção periódica do modelo Fox Eyes",
    price: 7000,
    duration: 120,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Manutenção Luxo 5d",
    description: "Manutenção periódica do Volume 5D",
    price: 8000,
    duration: 90,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Manutenção Volume Brasileiro",
    description: "Manutenção periódica do Volume Brasileiro",
    price: 6000,
    duration: 90,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Manutenção Volume Chocolate",
    description: "Manutenção periódica do Volume Chocolate",
    price: 6500,
    duration: 90,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Manutenção Volume Egípicio",
    description: "Manutenção periódica do Volume Egípicio",
    price: 7000,
    duration: 90,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Mão",
    description: "Manicure completa (corte, lixa e cuticulagem)",
    price: 4000,
    duration: 90,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Pé",
    description: "Pedicure completa (corte, lixa e cuticulagem)",
    price: 4500,
    duration: 100,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Pé e Mão",
    description: "Combo completo Manicure e Pedicure",
    price: 7500,
    duration: 150,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Remoção de Cílios",
    description: "Remoção segura de extensão aplicada no salão",
    price: 2000,
    duration: 25,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Remoção de Cílos de Outra Profisional",
    description: "Remoção de extensão aplicada em outro estabelecimento",
    price: 3000,
    duration: 25,
    category: Category.ESTHETICS,
    active: true,
  },
  {
    name: "Sobrancelhas",
    description: "Limpeza de fios e ajuste de formato",
    price: 4000,
    duration: 60,
    category: Category.ESTHETICS,
    active: true,
  },
  ];

  await db.service.createMany({
    data: services,
    skipDuplicates: true,
  });

  console.log("✅ Services created");
}

async function seedProfessionals() {
  console.log("💈 Seeding professionals and their login users...");

  // 1. Gerar o hash da senha padrão para todos os profissionais do teste
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash("123", saltRounds);

  const professionals = [
    {
      name: "Marcos",
      phone: "11999999999",
      commissionRate: 0.5,
      commissionType: "percentage",
      category: Category.HAIR,
      bio: "Especialista em cortes modernos.",
    },
    {
      name: "Almir",
      phone: "11988888888",
      bio: "Há mais de 30 anos fazendo arte",
      commissionRate: 1.0,
      commissionType: "percentage",
      category: Category.HAIR,
    },
    {
      name: "Sérgio",
      phone: "11977777777",
      commissionRate: 0.5,
      commissionType: "percentage",
      category: Category.HAIR,
      bio: "Barbeiro e visagista profissional.",
    },
    {
      name: "Glória",
      phone: "11966666666",
      bio: "Estética facial e corporal com toque de cuidado",
      commissionRate: 1.0, 
      commissionType: "percentage",
      category: Category.ESTHETICS,
    },
    {
      name: "Duda",
      phone: "11955555555",
      commissionRate: 0.5, 
      commissionType: "percentage",
      category: Category.ESTHETICS,
      bio: "Especialista em cuidados faciais.",
    },
  ];

  // 2. Usamos o mapeamento aninhado para criar o Usuário E o Profissional juntos
  const createdUsersWithProfiles = await Promise.all(
    professionals.map((prof) => {
      // Gera um email amigável em minúsculo e sem espaços (ex: marcos@hairbooking.com)
      const emailDomain = `${prof.name.toLowerCase().replace(/\s+/g, "")}@hairbooking.com`;

      return db.user.create({
        data: {
          fullName: prof.name,
          email: emailDomain,
          password: hashedPassword,
          role: Role.PROFESSIONAL, // Garante que a role de acesso no Auth.js seja PROFESSIONAL
          
          // Cria os dados da sua tabela Professional vinculados a este User id automaticamente
          professional: {
            create: {
              fullName: prof.name,
              whatsapp: prof.phone,
              bio: prof.bio,
              commissionRate: prof.commissionRate,
              commissionType: prof.commissionType,
              category: prof.category,
            },
          },
        },
        include: {
          professional: true, // Inclui o objeto de retorno no array final
        },
      });
    })
  );

  console.log("✅ Professionals and credentials created successfully");
  
  // Retorna os dados criados (caso precise usar os IDs em seeds subsequentes como Appointment)
  return createdUsersWithProfiles;
}

async function seedProfessionalServices() {
  console.log("💇 Associating professionals with their services...");

  try {
    // 1. Busca todos os profissionais ativos do banco
    const professionals = await db.professional.findMany({
      where: { active: true }
    });

    // 2. Busca todos os serviços cadastrados no sistema
    const allServices = await db.service.findMany();

    if (professionals.length === 0 || allServices.length === 0) {
      console.log("⚠️ Nenhum profissional ou serviço encontrado para associar.");
      return;
    }

    // Array que vai acumular todos os vínculos criados antes de salvar no banco
    const relationsToCreate: { professionalId: string; serviceId: string }[] = [];

    // 3. Varre cada profissional e vincula os serviços da mesma categoria
    for (const prof of professionals) {
      // Filtra os serviços que possuem a MESMA categoria do profissional (ex: "HAIR" ou "ESTHETICS")
      // Nota: Ajuste "prof.category" ou "s.category" caso os nomes dos campos variem no seu schema
      const matchingServices = allServices.filter(
        (s) => s.category === prof.category
      );

      // Prepara o par de IDs para inserção em lote
      matchingServices.forEach((service) => {
        relationsToCreate.push({
          professionalId: prof.id, // ID do profissional
          serviceId: service.id,   // ID do serviço correspondente
        });
      });
    }

    // 4. Salva tudo de uma vez no banco usando createMany de forma performática
    if (relationsToCreate.length > 0) {
      const result = await db.professionalService.createMany({
        data: relationsToCreate,
        skipDuplicates: true, // 🛡️ Evita erros se o seed rodar de novo e o vínculo já existir
      });

      console.log(`✅ Sucesso! ${result.count} vínculos criados entre profissionais e serviços.`);
    } else {
      console.log("ℹ️ Nenhum novo vínculo precisava ser criado.");
    }

  } catch (error) {
    console.error("❌ Falha ao associar profissionais com serviços:", error);
  }
}

async function seedBusinessHours() {
  console.log("🕒 Seeding business hours...");

  const businessHours = [
    { dayOfWeek: 1, startTime: "10:00", endTime: "20:00" },  // Terça (Tuesday)
    { dayOfWeek: 2, startTime: "08:00", endTime: "22:00" },  // Quarta (Wednesday)
    { dayOfWeek: 3, startTime: "08:00", endTime: "22:00" },  // Quinta (Thursday)
    { dayOfWeek: 4, startTime: "08:00", endTime: "22:00" },  // Sexta (Friday)
    { dayOfWeek: 5, startTime: "08:00", endTime: "22:00" },  // Sábado (Saturday)
  ];

  await db.businessHours.createMany({
    data: businessHours,
  });

  console.log("✅ Business hours created");
}

async function seedClients() {

  console.log("👤 Seeding clients...");

  const clients = [
    {
      fullName: "Kevin Braga",
      whatsapp: "5511971255628",
      profileImage: "https://avatars.githubusercontent.com/u/12345678?v=4",
      technicalNotes: "Mecha loira nas pontas, alisamento na raiz",
    }
  ];

  const client = await db.client.createMany({
    data: clients,
  });
}

async function seedAppointments() {
  console.log("📅 Seeding overlapping appointments...");

  // 1. Busca o cliente
  const client = await db.client.findFirst();

  // 2. Busca dois profissionais diferentes (ex: Cabelereiro e Manicure)
  const professionals = await db.professional.findMany({ take: 2 });
  
  // 3. Busca dois serviços diferentes (ex: Cabelo e Unha)
  const services = await db.service.findMany({ take: 2 });

  if (!client || professionals.length < 2 || services.length < 2) {
    throw new Error("Missing client, or you need at least 2 professionals and 2 services in the database to run this seed.");
  }

  const p1 = professionals[0];
  const p2 = professionals[1];
  
  const s1 = services[0];
  const s2 = services[1];

  // 4. Calcula o preço total somando os dois serviços (conforme corrigido no seu schema: totalPrice)
  const totalPrice = s1.price + s2.price;

  // 5. Cria o agendamento Master pai
  const appointment = await db.appointment.create({
    data: {
      date: new Date(), // Agendamento para hoje
      price: totalPrice, // Preço total unificado em centavos
      clientId: client.id,
      status: "CONFIRMED",
      observations: "Agendamento duplo: Cabelo e unha em paralelo com profissionais diferentes.",
    },
  });

  // 6. Define o horário de início travado às 14:00 para AMBOS (Sobreposição/Overlap)
  const startTime = new Date();
  startTime.setHours(14, 0, 0, 0);

  // 7. Calcula o término individual de cada serviço baseado na duração de cada um
  const endTimeService1 = new Date(startTime.getTime() + s1.duration * 60_000);
  const endTimeService2 = new Date(startTime.getTime() + s2.duration * 60_000);

  // 8. Cria os dois ScheduledServices apontando para o mesmo appointmentId e startTime
  await db.scheduledService.createMany({
    data: [
      {
        appointmentId: appointment.id,
        professionalId: p1.id,
        serviceId: s1.id,
        price: s1.price, // Snapshot do preço do serviço 1
        startTime: startTime,
        endTime: endTimeService1,
      },
      {
        appointmentId: appointment.id,
        professionalId: p2.id,
        serviceId: s2.id,
        price: s2.price, // Snapshot do preço do serviço 2
        startTime: startTime, // Começa exatamente no mesmo minuto (14h)
        endTime: endTimeService2,
      }
    ]
  });

  console.log(`✅ Appointment created with 2 overlapping services running at 14:00.`);
}

async function seedUsers() {
  console.log('👥 Populando usuários...')

  const saltRounds = 10
  const hashedPassword = await bcrypt.hash('SenhaSegura123', saltRounds)

  // 1. Usuário Comum
  const user = await db.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      fullName: 'Silva Comum',
      password: hashedPassword,
      role: Role.USER,
    },
  })

  // 2. Administrador
  const admin = await db.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      fullName: 'Carlos Admin',
      password: hashedPassword,
      role: Role.ADMIN,
    },
  })

  // 3. Gerente
  const manager = await db.user.upsert({
    where: { email: 'manager@example.com' },
    update: {},
    create: {
      email: 'manager@example.com',
      fullName: 'Ana Manager',
      password: hashedPassword,
      role: Role.PROFESSIONAL,
    },
  })

  return { user, admin, manager }
}

async function main() {

  await clearDatabase();

  await seedServices();

  await seedProfessionals();

  await seedProfessionalServices();

  await seedClients();

  await seedBusinessHours();

  await seedAppointments();
  
  await seedUsers();

  console.log("🌱 Database seeded successfully");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });