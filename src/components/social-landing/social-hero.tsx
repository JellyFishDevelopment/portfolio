"use client";

import { Play, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/jellyfish-3d.png";

export function SocialHero() {
  return (
    <section
      id="hero"
      className="relative pt-20 pb-16 lg:pt-20 lg:pb-32 overflow-hidden bg-brand-dark text-white rounded-b-[2.5rem] lg:rounded-b-[5rem] mx-2 lg:mx-4"
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: "radial-gradient(circle at 70% 30%, #4a1d29 0%, #111111 60%)",
        }}
      />
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10 mb-12 lg:mb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase text-gray-200">
              Disponível para novos projetos
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Agência Digital de <br />
            <span
              className="bg-gradient-to-r from-white to-brand-primaryLight bg-clip-text text-transparent"
            >
              Alta Performance
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
            Transformamos marcas através de estratégias de social media, branding
            e performance. Resultados reais para empresas que buscam crescimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full bg-brand-primary hover:bg-brand-primaryDark border-0 text-base font-semibold px-8 py-4 shadow-lg"
              >
                Solicitar Proposta
              </Button>
            </a>
            <a href="#cases">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4"
              >
                <Play className="mr-2 h-4 w-4" />
                Ver Cases
              </Button>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-400 text-sm font-medium">
            {["Estratégia", "Criação", "Performance"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative z-10">
          <div className="relative w-full aspect-square max-w-lg mx-auto lg:mr-0">
            <img
              src={HERO_IMAGE}
              alt="Abstract 3D shape glassmorphism"
              width={600}
              height={600}
              className="w-full h-full object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
