import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Professional, Service } from '@/prisma/generated/client';
import { formatDuration, formatBrazilianPhone} from '@/lib/utils';
import { getClientByPhone, createBooking, getProfessionals, getServicesByProfessional } from '@/app/actions/';

interface FormData {
  clientName: string;
  clientPhone: string;
  professionalId: string;
  serviceId: string;
  date: string;
  time: string;
  observations: string;
}

interface AppointmentModalProps {
  onClose: () => void;
}

export function AppointmentModal({ onClose }: AppointmentModalProps) {
  // Estados para armazenar os dados vindos do banco
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [isExistingClient, setIsExistingClient] = useState(false)
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    clientPhone: '',
    professionalId: '',
    serviceId: '',
    date: '',
    time: '',
    observations: '',
  });

  useEffect(() => {
    setLoading(true);
    getProfessionals()
      .then(setProfessionals) 
      .catch((err) => console.error("Erro ao carregar profissionais:", err))
      .finally(() => setLoading(false));
  }, []);


  useEffect(() => {
    const professional = formData.professionalId
    if (!professional) {
      setServices([]);
      setFormData(prev => ({ ...prev, serviceId: '' }));
      return;
    }
    setLoading(true);
    getServicesByProfessional(professional)
      .then((data) => {
        setServices(data);
        setFormData(prev => ({ ...prev, serviceId: '' }));
      })
      .catch((err) => console.error("Erro ao carregar serviços:", err))
      .finally(() => setLoading(false));
  }, [formData.professionalId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.clientName || 
      !formData.clientPhone ||
      !formData.professionalId || 
      !formData.serviceId || 
      !formData.date || 
      !formData.time
    ) {
      alert("Por favor, preencha todos os campos obrigatórios, incluindo o telefone.");
      return;
    }

    

    setLoading(true);

    try {
      // 2. Busca o serviço localmente para pegar o preço e a duração
      const selectedService = services.find(s => s.id === formData.serviceId);

      if (!selectedService) {
        alert("O serviço selecionado é inválido.");
        setLoading(false);
        return;
      }

      // 3. Dispara a Server Action (Corrigido para clientName e clientPhone)
      const response = await createBooking({
        name: formData.clientName,
        phone: formData.clientPhone,
        professionalId: formData.professionalId,
        serviceId: formData.serviceId,
        date: formData.date,
        time: formData.time,
        observations: formData.observations,
        priceInCents: selectedService.price,
        durationInMinutes: selectedService.duration // O servidor calcula o endTime com isso
      });

      console.log(response);

      // 4. Tratamento inteligente do Result Pattern
      if (response.success) {
        // Se você descomentar o router futuramente, ele entra aqui
        // router.refresh(); 
        onClose(); // Só fecha se realmente salvou com sucesso no banco!
      } else {
        // Se o profissional já estiver ocupado, exibe a mensagem exata do servidor
        alert(response.error);
      }

    } catch (error) {
      console.error("Erro crítico no envio do formulário:", error);
      alert("Não foi possível conectar ao servidor. Tente novamente.");
    } finally {
      // Desliga o loading em caso de erro ou falha para permitir nova tentativa
      setLoading(false);
    }
  };

  const handlePhoneChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const maskedValue = formatBrazilianPhone(rawValue);
    
    // 1. Atualiza o estado do input com a máscara visual imediatamente
    setFormData((prev) => ({ 
      ...prev, 
      clientPhone: maskedValue 
    }));

    // 2. Extrai apenas os números para validar o tamanho real digitado
    const digitsOnly = rawValue.replace(/\D/g, "");

    // 3. Quando o usuário digita o último número (DDD + 9 dígitos = 11 números)
    if (digitsOnly.length === 11) {
      // Dispara a Server Action que busca na tabela de clientes
      const client = await getClientByPhone('55' + maskedValue);

      if (client) {
        setFormData((prev) => ({ 
          ...prev, 
          clientName: client.fullName || "" 
        }));
        setIsExistingClient(true);
      } else {
              setIsExistingClient(false);
            }
    } else {
      setIsExistingClient(false);
      setFormData((prev) => ({ 
      ...prev, 
      clientName: '' 
      }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <form onSubmit={handleSubmit} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Novo Agendamento</h2>
          <button type="button" onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Telefone
            </label>
            {/* Container relativo para acoplar o prefixo */}
            <div className="relative flex items-center rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-black/10 focus-within:border-gray-400 overflow-hidden transition-all">
              
              {/* O Prefixo "Fancy" fixo e estilizado */}
              <div className="flex items-center gap-1 bg-gray-50 px-3 py-2 border-r border-gray-200 text-xs font-bold text-gray-400 select-none h-full">
                <span className="text-sm">🇧🇷</span>
                <span>+55</span>
              </div>

              {/* O Input de texto real onde o usuário digita apenas o DDD e Número */}
              <input 
                type="tel" 
                name="clientPhone"
                value={formData.clientPhone}
                onChange={handlePhoneChange}
                maxLength={15} // Limita o tamanho máximo com máscara: (11) 99999-9999
                placeholder="(11) 99999-9999" 
                className="w-full px-3 py-2 text-sm bg-transparent focus:outline-none font-medium text-gray-800" 
                required
              />
            </div>
          </div>
          <div>
  <div className="flex items-center justify-between mb-1">
    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
      Cliente *
    </label>
    
    {/* Badge discreto de aviso */}
    {formData.clientPhone.replace(/\D/g, "").length === 11 && isExistingClient && (
      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
        ✓ Cliente Cadastrado
      </span>
    )}
  </div>

  <input 
    type="text" 
    name="clientName"
    value={formData.clientName}
    onChange={handleChange}
    placeholder="Nome do cliente" 
    /* Bloqueia o campo se o cliente já existir no banco */
    disabled={isExistingClient}
    /* Estilização cinza nativa de campo travado */
    className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200 ${
      isExistingClient 
        ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed" 
        : "border-gray-200 bg-white text-gray-800 focus:border-gray-400"
    }`}
    required
  />
</div>
          {/* Dropdown de Profissionais */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Profissional *</label>
            <select 
              name="professionalId"
              value={formData.professionalId}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 disabled:opacity-50"
              required
            >
              <option value="">
                {isLoading ? "Carregando profissionais..." : "Selecionar profissional"}
              </option>
              {professionals.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* Dropdown de Serviços (Habilita apenas após escolher o profissional) */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Serviço *</label>
            <select 
              name="serviceId"
              value={formData.serviceId}
              onChange={handleChange}
              disabled={isLoading || !formData.professionalId}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 disabled:opacity-50"
              required
            >
              <option value="">
                {isLoading ? "Buscando..." : !formData.professionalId ? "Escolha um profissional primeiro" : "Selecionar serviço"}
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — R$ {(s.price / 100).toFixed(2)} ({formatDuration(s.duration)})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Data *</label>
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400" 
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Horário *</label>
              <input 
                type="time" 
                name="time"
                value={formData.time}
                onChange={handleChange}
                min="08:00" // Alinhado com o START_HOUR da sua grade
                max="19:00" // Alinhado com o END_HOUR da sua grade
                step="1800" // Força o seletor a pular de 30 em 30 minutos (1800 segundos)
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400" 
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Observações</label>
            <textarea 
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              rows={2} 
              placeholder="Opcional..." 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 resize-none" 
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button 
            type="button" 
            onClick={onClose} 
            className="flex-1 py-2 px-4 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="flex-1 py-2 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
