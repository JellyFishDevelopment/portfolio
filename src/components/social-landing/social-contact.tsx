"use client";

import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import type { Locale } from "@/config/i18n.config";

export function SocialContact({ lang }: { lang: Locale }) {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/20 rounded-full blur-3xl" />

          <div className="w-full lg:w-1/2 p-10 lg:p-16 text-white z-10 flex flex-col justify-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Pronto para escalar sua marca?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-md">
              Vamos conversar sobre seus objetivos e desenhar uma estratégia
              personalizada para o seu negócio.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/70 uppercase font-bold tracking-wider">
                    Email
                  </p>
                  <p className="font-medium">contato@jellyfish.net.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl" aria-hidden>📱</span>
                </div>
                <div>
                  <p className="text-xs text-white/70 uppercase font-bold tracking-wider">
                    WhatsApp
                  </p>
                  <p className="font-medium">(13) 99106-3173</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white p-10 lg:p-16 z-10">
            <ContactForm params={{ lang }} />
          </div>
        </div>
      </div>
    </section>
  );
}
