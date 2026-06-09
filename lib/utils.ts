import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Constantes compartilhadas necessárias para os cálculos da grade
export const SLOT_HEIGHT = 56;       // px por slot de 30 minutos
export const START_HOUR  = 8;        // Começa às 08:00
export const END_HOUR    = 19;       // Termina às 19:00

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string): string {
  if (!name) return "";
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function isToday(date: Date): boolean {
  const t = new Date();
  return date.getDate() === t.getDate() && 
         date.getMonth() === t.getMonth() && 
         date.getFullYear() === t.getFullYear();
}

export function addDays(date: Date, n: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Converte um objeto Date (ou string ISO) para minutos decorridos a partir do START_HOUR do salão.
 */
export function toMinutesFromStart(dateInput: Date | string): number {
  const d = new Date(dateInput);
  return (d.getHours() - START_HOUR) * 60 + d.getMinutes();
}

/**
 * Retorna o horário formatado em HH:MM local (ex: "14:30") a partir de um Date ou string.
 */
export function getLocalTimeStr(dateInput: Date | string): string {
  const d = new Date(dateInput);
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function isSameLocalDay(dateInput: Date | string, dateToCompare: Date): boolean {
  const d = new Date(dateInput);
  return d.getFullYear() === dateToCompare.getFullYear() && 
         d.getMonth() === dateToCompare.getMonth() && 
         d.getDate() === dateToCompare.getDate();
}

/**
 * Calcula o posicionamento vertical em pixels (top) para a linha indicadora de "Agora".
 */
export function currentTimeTopPx(): number {
  const now = new Date();
  if (now.getHours() < START_HOUR || now.getHours() >= END_HOUR) return -1;
  
  const mins = (now.getHours() - START_HOUR) * 60 + now.getMinutes();
  return (mins / 30) * SLOT_HEIGHT;
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export const formatDuration = (minutes: number): string => {
  if (minutes < 60) return `${minutes}m`;
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) return `${hours}h`;
  return `${hours}h ${remainingMinutes}m`;
};

export const formatBrazilianPhone = (value: string) => {
  if (!value) return "";
  const numbers = value.replace(/\D/g, ""); // Remove tudo que não for número
  
  if (numbers.length <= 2) return `(${numbers}`;
  if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

export function sanitizeBrazilianPhone(phoneStr: string): string {
  if (!phoneStr) return "";
  // Remove tudo que não for número (parênteses, espaços, traços, mais)
  const onlyNumbers = phoneStr.replace(/\D/g, "");
  // Se o usuário já digitou o DDD iniciando com 55, apenas retorna o número
  if (onlyNumbers.startsWith("55") && onlyNumbers.length >= 12) {
    return onlyNumbers;
  }
  // Caso contrário, injeta o DDI do Brasil (55) na frente
  return `55${onlyNumbers}`;
}

/**
 * Formata uma string YYYY-MM-DD em uma data por extenso em português.
 * Evita bugs de fuso horário UTC nativos do JavaScript.
 */
export function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return "Não selecionada";
  const [year, month, day] = dateStr.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);
  
  return dateObj.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}



/**
 * Gera uma janela de objetos Date sequenciais iniciando a partir de hoje.
 */
export function getRollingDaysWindow(windowSizeInDays = 30): Date[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Array.from({ length: windowSizeInDays }, (_, i) => {
    const targetDate = new Date();
    targetDate.setDate(today.getDate() + i);
    return targetDate;
  });
}

/**
 * Extrai atributos de um objeto Date para mapear botões de seleção de dia em loops.
 */
export function mapDateObjectToAttributes(dateObj: Date) {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  
  return {
    dateValue: `${year}-${month}-${day}`,
    dayLabel: dateObj.getDate(),
    weekdayLabel: dateObj.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", ""),
    monthLabel: dateObj.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "")
  };
}