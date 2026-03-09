"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

/** Prints dos perfis de Instagram que criamos e gerenciamos (imagens em /public/case1.jpeg a case6.jpeg). */
const INSTAGRAM_PRINTS = [
  { image: "/case1.jpeg", client: "Sorrir Faz Bem - Santos", metric: "Odontologia" },
  { image: "/case2.jpeg", client: "Brasil Sorriso - Centro", metric: "Clínica odontológica" },
  { image: "/case3.jpeg", client: "Py013", metric: "Comunidade de Tecnologia" },
  { image: "/case4.jpeg", client: "Instituto Reserva Musical", metric: "Instituto de Música" },
  { image: "/case5.jpeg", client: "Brechó Maria Flor", metric: "Brechó de Roupas" },
  { image: "/case6.jpeg", client: "OpsomCar", metric: "Mecânica Automotiva" },
];

export function SocialCases() {
  return (
    <section
      id="cases"
      className="py-20 lg:py-32 bg-brand-dark text-white rounded-[2.5rem] lg:rounded-[4rem] mx-2 lg:mx-4 overflow-hidden relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-primaryLight text-xs font-bold tracking-wider uppercase mb-4">
              Cases de Sucesso
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Resultados em <span className="text-brand-primary">evidências</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl">
              Alguns dos trabalhos que fizemos nos perfis de Instagram dos nossos clientes: criação, gestão e estratégia em ação.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {INSTAGRAM_PRINTS.map(({ image, client, metric }, i) => (
            <div
              key={`${client}-${i}`}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10 hover:border-brand-primary/50 transition-all duration-300 aspect-[1/2]"
            >
              <Image
                src={image}
                alt={`Print Instagram - ${client}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
                <p className="font-semibold text-white text-sm">{client}</p>
                <p className="text-brand-primaryLight text-xs">{metric}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          {/* <a href="#contact">
            <Button
              variant="outline"
              className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Ver todos os cases
            </Button>
          </a> */}
        </div>
      </div>
    </section>
  );
}
