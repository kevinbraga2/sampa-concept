"use client";

import { useState, useEffect, useMemo } from "react";

import { toggleServiceActive, getServices } from "@/app/actions";

import { Service, Category } from "@/prisma/generated/client"

import { ServiceModal } from "@/components/ui/ServiceModal";
import { formatPrice, formatDuration } from "@/lib/utils";
import {
  Search, Plus, MoreHorizontal, Pencil, PowerOff, Power,
  Clock, Scissors, Sparkles
} from "lucide-react";


const CATEGORY_META: Record<Category, { label: string; className: string; icon: React.ReactNode }> = {
  HAIR:      { label: "Cabelo",   className: "bg-violet-50 text-violet-700 border border-violet-200", icon: <Scissors className="w-3 h-3" /> },
  ESTHETICS: { label: "Estética", className: "bg-rose-50 text-rose-700 border border-rose-200",       icon: <Sparkles  className="w-3 h-3" /> },
};

// ─── Row Actions Dropdown ─────────────────────────────────────────────────────
// Rendered via a portal-like fixed div so it's never clipped by any ancestor overflow

function RowActions({ service, onToggle }: { service: Service; onToggle: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, right: 0 });

  function handleOpen(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
      setPos({
        top:   rect.bottom + window.scrollY + 4,
        right: window.innerWidth - rect.right,
      });
      setOpen((v) => !v);
  }


  return (
    <>
      <button
        onClick={handleOpen}
        className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          {/* Dropdown — fixed so it escapes all overflow containers */}
          <div
            className="fixed z-50 w-44 bg-white border border-gray-200 rounded-xl shadow-lg py-1 text-sm"
            style={{ top: pos.top, right: pos.right }}
          >
            <button
              onClick={() => setOpen(false)}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Pencil className="w-3.5 h-3.5 text-gray-400" />
              Editar serviço
            </button>

            <div className="my-1 border-t border-gray-100" />

            <button
              onClick={() => { onToggle(service.id); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 transition-colors ${
                service.active
                  ? "text-red-600 hover:bg-red-50"
                  : "text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              {service.active
                ? <><PowerOff className="w-3.5 h-3.5" /> Desativar</>
                : <><Power    className="w-3.5 h-3.5" /> Ativar</>
              }
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default function ServicesTable() {
  const [services, setServices]             = useState<Service[]>();
  const [search, setSearch]                 = useState("");
  const [categoryFilter, setCategoryFilter] = useState<Category|"ALL">("ALL");
  const [isModalOpen, setIsModalOpen]   = useState(false);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  const filtered = useMemo(() =>
      (services ?? []).filter((s) => {
        const matchesSearch = s.name
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchesCategory =
          categoryFilter === "ALL" || s.category === categoryFilter;

        return matchesSearch && matchesCategory;
      }),
    [services, search, categoryFilter]
  );

  const toggleActive = async (id: string) => {
    const service = services?.find((s) => s.id === id);

  if (!service) return;

  const newActive = !service.active;

  // Optimistic UI update
  setServices((prev) =>
    prev?.map((s) =>
      s.id === id
        ? { ...s, active: newActive }
        : s
    )
  );

  try {
    await toggleServiceActive(id, newActive);
  } catch (error) {
    console.error(error);

    // rollback if request fails
    setServices((prev) =>
      prev?.map((s) =>
        s.id === id
          ? { ...s, active: service.active }
          : s
      )
    );
  }
  };
  
  return (
    <>
      {isModalOpen && (
        <ServiceModal onClose={() => setIsModalOpen(false)} />
      )}
    
      <div className="space-y-4">
        {/* Filtros e Controles de Ação */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar serviço..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 placeholder-gray-400 transition"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as Category | "ALL")}
            className="px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 text-gray-700 transition"
          >
            <option value="ALL">Todas as categorias</option>
            <option value="HAIR">Cabelo</option>
            <option value="ESTHETICS">Estética</option>
          </select>
          <div className="flex-1  " />
          {/* Ativação corrigida: abre o modal independente no clique */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Adicionar
          </button>
        </div>

        {/* Tabela de Dados */}
        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Serviço</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Categoria</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Duração</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Preço</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                  <th className="px-4 py-3 w-10" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-5 py-12 text-center text-sm text-gray-400">
                      Nenhum serviço encontrado.
                    </td>
                  </tr>
                ) : (
                  filtered.map((service) => {
                    const cat = CATEGORY_META[service.category];
                    return (
                      <tr
                        key={service.id}
                        className={`group transition-colors hover:bg-gray-50/60 ${!service.active ? "opacity-50" : ""}`}
                      >
                        <td className="px-5 py-3.5">
                          <div className="font-medium text-gray-900">{service.name}</div>
                          {service.description && (
                            <div className="text-xs text-gray-400 mt-0.5 max-w-xs truncate">{service.description}</div>
                          )}
                        </td>

                        <td className="px-4 py-3.5">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${cat.className}`}>
                            {cat.icon}
                            {cat.label}
                          </span>
                        </td>

                        <td className="px-4 py-3.5">
                          <span className="inline-flex items-center gap-1.5 text-gray-600">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            {formatDuration(service.duration)}
                          </span>
                        </td>

                        <td className="px-4 py-3.5 font-medium text-gray-900">
                          {formatPrice(service.price)}
                        </td>

                        <td className="px-4 py-3.5">
                          <button
                            onClick={() => toggleActive(service.id)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition-colors ${
                              service.active
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                                : "bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100"
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${service.active ? "bg-emerald-500" : "bg-gray-400"}`} />
                            {service.active ? "Ativo" : "Inativo"}
                          </button>
                        </td>

                        <td className="px-4 py-3.5 text-right">
                          <RowActions service={service} onToggle={toggleActive} />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {filtered.length > 0 && (
            <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50 rounded-b-xl">
              <span className="text-xs text-gray-400">
                {filtered.length} {filtered.length === 1 ? "serviço" : "serviços"} encontrado{filtered.length === 1 ? "" : "s"}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
