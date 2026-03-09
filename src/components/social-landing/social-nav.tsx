"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const anchors = [
  { href: "#hero", label: "Início" },
  { href: "#services", label: "Serviços" },
  { href: "#cases", label: "Cases" },
  { href: "#about", label: "Agência" },
  { href: "#testimonials", label: "Depoimentos" },
];

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.slice(1);
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

export function SocialNav({ lang }: { lang: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <nav
      id="navbar"
      className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href={`/${lang}/social`}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white">
                <span className="text-lg" aria-hidden>◇</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight group-hover:text-brand-primary transition-colors">
                Jellyfish
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {anchors.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
              <Button
                className="hidden md:inline-flex rounded-full bg-brand-dark hover:bg-brand-primary border-0"
                size="sm"
              >
                Falar com Consultor
              </Button>
            </a>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-brand-primary focus:outline-none transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl transition-all duration-200",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible max-h-0 overflow-hidden"
        )}
      >
        <div className="px-4 pt-2 pb-8 space-y-1">
          {anchors.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                scrollToSection(e, href);
                closeMobile();
              }}
              className="block px-4 py-4 rounded-xl text-lg font-medium text-gray-900 hover:bg-gray-50"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              scrollToSection(e, "#contact");
              closeMobile();
            }}
            className="block w-full text-center mt-6 px-6 py-4 rounded-full font-bold text-white bg-brand-primary hover:bg-brand-primaryDark shadow-lg"
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
    </nav>
  );
}
