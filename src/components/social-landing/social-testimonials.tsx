"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const AVATARS = {
  one: "/felipe-opsom.jpg",
  two: "/maria-flor.jpg",
  three: "/guilen.jpg",
};

const TESTIMONIALS = [
 {
    quote:
      "A equipe é extremamente proativa e criativa. Os relatórios são claros e os resultados aparecem no faturamento. Recomendo demais!",
    name: "Maria Rosa",
    role: "Fundadora, Brechó Maria Flor",
    avatar: AVATARS.two,
    stars: 5,
  },
  {
    quote:
      "A Jellyfish transformou nossa presença digital. Saímos de uma marca desconhecida para referência no setor em menos de 6 meses.",
    name: "Felipe Saurim",
    role: "CEO, OpsomCar",
    avatar: AVATARS.one,
    featured: true,
    stars: 5,
  },
  {
    quote:
      "O atendimento é o diferencial. Eles realmente vestem a camisa da empresa e se preocupam com cada detalhe das campanhas.",
    name: "Cláudio Guilen",
    role: "Maestro, Instituto Reserva Musical",
    avatar: AVATARS.three,
    featured: false,
    stars: 5,
  },
];

export function SocialTestimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary font-semibold tracking-wider text-sm uppercase">
            Depoimentos
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 font-display">
            O que dizem nossos parceiros
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(({ quote, name, role, avatar, featured, stars }) => (
            <div
              key={name}
              className={`bg-white p-8 rounded-3xl border relative ${
                featured
                  ? "shadow-lg border-brand-primary/10 md:-translate-y-4"
                  : "shadow-sm border-gray-100"
              }`}
            >
              <Quote className="text-brand-primary text-4xl absolute top-8 right-8 opacity-20" />
              {stars != null && (
                <div className="flex text-yellow-400 text-sm mb-4 gap-0.5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} aria-hidden>★</span>
                  ))}
                </div>
              )}
              <p className="text-gray-600 mb-6 relative z-10">{quote}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
