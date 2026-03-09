"use client";

import { Megaphone, TrendingUp, PenLine, Check } from "lucide-react";

const SERVICES = [
  {
    icon: Megaphone,
    title: "Social Media",
    description:
      "Gestão estratégica dos seus perfis: planejamento, acompanhamento de métricas e comunidade. Orientamos a linha editorial.",
    items: ["Gestão de perfis", "Estratégia e métricas", "Community Management"],
    dark: false,
  },
  {
    icon: TrendingUp,
    title: "Performance Ads",
    description:
      "Campanhas de tráfego pago otimizadas para conversão e ROI positivo em todas as plataformas.",
    items: ["Meta Ads (Facebook/Insta)", "Google Ads & Youtube", "TikTok Ads"],
    dark: true,
  },
  {
    icon: PenLine,
    title: "Branding & Design",
    description:
      "Identidade visual marcante que conecta sua marca ao público certo e transmite seus valores.",
    items: ["Identidade Visual", "Rebranding", "Materiais Gráficos"],
    dark: false,
  },
];

export function SocialServices() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-brand-primary text-xs font-bold tracking-wider uppercase mb-4">
              Nossos Serviços
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Abordagem completa para <br /> resultados máximos
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, description, items, dark }) => (
            <div
              key={title}
              className={`group rounded-3xl p-8 transition-all duration-300 flex flex-col h-full 
              bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100
              `}
            >
              {dark && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" />
              )}
              <div className={`mb-8 relative z-10`}>
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300
                   bg-white/10 backdrop-blur-md border border-white/10 text-brand-primary
                  `}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-gray-900">
                  {title}
                </h3>
                <p
                  className={`leading-relaxed text-gray-600`}
                >
                  {description}
                </p>
              </div>
              <div
                className={`mt-auto pt-6 border-t border-gray-200/50 relative z-10`}
              >
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center text-sm text-gray-500`}
                    >
                      <Check className="text-brand-primary text-xs mr-2 h-4 w-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
