"use client";

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
              <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white">
                <span className="text-lg" aria-hidden>◇</span>
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
                <span aria-hidden>IG</span>
              </a>
              <a
                href="https://www.linkedin.com/company/jellyfish-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="LinkedIn"
              >
                <span aria-hidden>in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="Behance"
              >
                <span aria-hidden>Be</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-4 text-gray-400">
              {FOOTER_LINKS.company.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-brand-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-4 text-gray-400">
              {FOOTER_LINKS.services.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-brand-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Novidades</h4>
            <p className="text-gray-400 text-sm mb-4">
              Receba insights de marketing semanalmente.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-primary transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 w-8 h-8 bg-brand-primary rounded-md flex items-center justify-center hover:bg-brand-primaryLight transition-colors"
                aria-label="Enviar"
              >
                →
              </button>
            </form>
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
