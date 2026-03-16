"use client";

import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import Link from "next/link";

const FOOTER_LINKS = {
  company: [
    { label: "Sobre Nós", href: "#about" },
    { label: "Cases de Sucesso", href: "#cases" },
    { label: "Carreiras", href: "#" },
    { label: "Política de Privacidade", href: "#" },
  ],
  services: [
    { label: "Social Media Marketing", href: "#" },
    { label: "Tráfego Pago", href: "#" },
    { label: "Branding", href: "#" },
    { label: "Consultoria Digital", href: "#" },
  ],
};

export function SocialFooter({ lang }: { lang: string }) {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link
              href={`/${lang}/social`}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-brand-primary">
                <img src="/logo-jellyfish.png" alt="Jellyfish" width={32} height={32} />
              </div>
              <span className="font-display font-bold text-xl">Jellyfish</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Agência digital focada em resultados reais. Conectamos marcas a
              pessoas através de estratégias inteligentes e criativas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/jellyfishdevelopment/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogoIcon className="h-5 w-5" />
              </a>

            </div>
          </div>






        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jellyfish. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
