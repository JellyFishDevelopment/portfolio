"use client";

import Image from "next/image";
import { Check, Palette, Link2, Lightbulb, Zap, Brain } from "lucide-react";

const FUNDACAO_CARDS = [
  {
    tag: "FUNDAÇÃO",
    title: "VISUAL & AUTONOMIA",
    icon: Palette,
    items: [
      "Manual de Identidade Visual técnico.",
      "Templates editáveis (Canva/PS) para posts recorrentes.",
    ],
    resultado: "Autonomia total com padrão internacional.",
  },
  {
    tag: "INFRAESTRUTURA",
    title: "CANAIS & SEO",
    icon: Link2,
    items: [
      "Otimização técnica de Perfil (SEO) para busca.",
      "Arquitetura de Links (Linktree Pro) para conversão.",
    ],
    resultado: '"Casa arrumada" e portas de entrada otimizadas.',
  },
  {
    tag: "INTELIGÊNCIA",
    title: "ESTRATÉGIA & WORKFLOW",
    icon: Lightbulb,
    items: [
      "Manual de Produção de Conteúdo (Ferramentas/Métodos).",
      "Calendário Editorial Estratégico e Roteirização.",
    ],
    resultado: "Mapa claro do que, como e quando postar.",
  },
  {
    tag: "MOTOR",
    title: "PERFORMANCE & GROWTH",
    icon: Zap,
    items: [
      "Gestão de META Ads (Campanhas focadas em público-alvo).",
      "Análise de Dados e Relatórios de Performance.",
    ],
    resultado: "Aceleração de alcance e escala de marca.",
  },
];

export function SocialAbout() {
  return (
    <section id="about" className="py-14 lg:py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-brand-primary text-xs font-bold tracking-wider uppercase mb-3">
            Quem Somos
          </span>
          <h3 className="font-display text-5xl font-bold text-gray-900 mb-3">
            Ecossistema de Marca Digital
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Engenharia e Estratégia para transformar talento artístico em autoridade digital escalável.
          </p>
        </div>

        {/* 4 cards Fundação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {FUNDACAO_CARDS.map(({ tag, title, icon: Icon, items, resultado }) => (
            <div
              key={title}
              className="group rounded-3xl p-8 bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col h-full"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-wider uppercase mb-4 w-fit">
                {tag}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-gray-900 mb-4">{title}</h4>
              <ul className="space-y-2 text-gray-600 text-sm mb-4 flex-1">
                {items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-gray-900 pt-4 border-t border-gray-200">
                → Resultado: {resultado}
              </p>
            </div>
          ))}
        </div>

        {/* O Diferencial */}
        <div className="rounded-3xl p-8 lg:p-12 bg-brand-dark text-white mb-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-brand-primaryLight text-xs font-bold tracking-wider uppercase mb-4">
              O Diferencial
            </span>
            <p className="text-2xl lg:text-3xl mb-2 flex items-center gap-2"><div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
              <Brain className="h-6 w-6" />
            </div>Curadoria Operacional</p>
            <p className="text-gray-300 text-lg lg:text-xl mb-6 max-w-3xl">
              &ldquo;Para quando você possui a arte, mas não o tempo. Nós recebemos seu material
              bruto, cuidamos da lapidação técnica, edição e agendamento estratégico.&rdquo;
            </p>
            <ul className="flex flex-wrap gap-4 text-gray-200">
              {["Edição e Legendagem", "Gestão de Publicação", "Otimização de Horários"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-brand-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Compromisso técnico */}
        <div className="rounded-3xl p-8 lg:p-12 bg-gray-50 border border-gray-100 text-center">
          <p className="font-display text-xl lg:text-2xl font-bold text-gray-900 max-w-3xl mx-auto leading-relaxed">
            &ldquo;Nós cuidamos da engenharia e da estratégia para que você possa recuperar o seu
            tempo para a criação.&rdquo;
          </p>
          <p className="text-sm font-semibold text-brand-primary mt-4 uppercase tracking-wide">
            Nosso compromisso técnico
          </p>
        </div>

      </div>
    </section>
  );
}
