import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/providers/SessionProvider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // O título que aparece na aba do navegador e no Google
  title: "SampaConcept", 
  
  // Breve resumo que convence o cliente a clicar
  description: "Somos o melhor Salão de Beleza da região, a mais de 30 anos fazendo Arte.",
  // Termos de busca (importante para SEO local)
  keywords: "SampaConcept, salão de beleza em Itaquera, Cortes de cabelo, estética, agendamento online",
  
  openGraph: {
    title: "SampaConcept - Agende seu horário",
    description: "Transforme seu visual no SampaConcept. Clique para ver nossos serviços e horários disponíveis.",
    type: "website",
    // Se você tiver uma foto do salão, pode adicionar a URL aqui depois:
    // images: ['https://seusite.com.br/foto-salao.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
