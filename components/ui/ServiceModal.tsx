"use client";

import { useState } from 'react';
import { X } from 'lucide-react';
import { useRouter } from "next/navigation";
import { Category } from "@/prisma/generated/client";
import { createService } from "@/app/actions"; // Crie esta Server Action

interface FormData {
  name: string;
  description: string;
  price: number; 
  duration: number; 
  category: Category;
}

interface ServiceModalProps {
  onClose: () => void;
  initialData?: {
    id: string;
    name: string;
    description?: string | null;
    price: number;    // Centavos vindo do banco
    duration: number; // Minutos vindo do banco
    category: Category;
  };
}

export function ServiceModal({ onClose, initialData }: ServiceModalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Inicializa o estado com uma categoria válida (HAIR) para evitar quebra do TypeScript
  const [formData, setFormData] = useState<FormData>({
    name: initialData?.name || '',
    description: initialData?.description || '',
    price: initialData ? initialData.price / 100 : 0, 
    duration: initialData?.duration || 45, 
    category: initialData?.category || 'HAIR', 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'price') {
      setFormData((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
    } else if (name === 'duration') {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value, 10) || 0 }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || formData.price <= 0 || formData.duration <= 0 || !formData.category) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);

    try {
      // Dispara a Server Action autônoma convertendo os centavos na boca do caixa
      const response = await createService({
        name: formData.name,
        description: formData.description,
        priceInCents: Math.round(formData.price * 100), 
        durationInMinutes: formData.duration,
        category: formData.category,
      });

      if (response.success) {
        router.refresh(); // Notifica as telas do Next.js para atualizar os dados
        onClose();
      } else {
        alert(response.error);
      }
    } catch (error) {
      console.error("Erro ao salvar serviço:", error);
      alert("Erro de rede ao salvar o serviço.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <form onSubmit={handleSubmit} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            {initialData ? 'Editar Serviço' : 'Novo Serviço'}
          </h2>
          <button type="button" onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Nome do Serviço *</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Corte de Cabelo Masculino" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400" 
              disabled={loading}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Categoria *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400"
              disabled={loading}
              required
            >
              <option value="HAIR">Cabelo</option>
              <option value="NAILS">Unhas</option>
              <option value="MAKEUP">Maquiagem</option>
              <option value="ESTHETICS">Estética</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Preço de Venda (R$) *</label>
              <input 
                type="number" 
                name="price"
                min="0.01"
                step="0.01"
                value={formData.price || ''}
                onChange={handleChange}
                placeholder="0,00"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400" 
                disabled={loading}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Duração (Minutos) *</label>
              <input 
                type="number" 
                name="duration"
                min="1"
                step="1"
                value={formData.duration || ''}
                onChange={handleChange}
                placeholder="Ex: 45"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400" 
                disabled={loading}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Descrição</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={2} 
              placeholder="Opcional... Detalhes sobre o procedimento" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 resize-none" 
              disabled={loading}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-3 mt-6">
          <button 
            type="button" 
            onClick={onClose} 
            className="flex-1 py-2 px-4 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            disabled={loading}
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="flex-1 py-2 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </form>
    </div>
  );
}
