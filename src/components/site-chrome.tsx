import {
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/dictionaries/default-dictionaries";
import { cn } from "@/lib/utils";

export const SITE_LINKS = {
  whatsapp: "https://wa.me/5513988417817",
  github: "https://github.com/JellyFishDevelopment",
  instagram: "https://www.instagram.com/jellyfishdevelopment/",
  linkedin: "https://www.linkedin.com/company/jellyfish-dev",
} as const;

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display font-bold tracking-tight", className)}>
      jellyfish<span className="text-primary"> devs</span>
    </span>
  );
}

export function HeroJellyfish() {
  return (
    <div className="relative flex justify-center">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[90px] md:h-[360px] md:w-[360px]"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <Image
        src="/jelly-hero.jpg"
        alt="Água-viva bioluminescente crimson, símbolo da JellyFish"
        width={1024}
        height={1024}
        priority
        className="animate-float-slow relative w-[320px] mix-blend-screen [mask-image:radial-gradient(circle,black_40%,transparent_70%)] [-webkit-mask-image:radial-gradient(circle,black_40%,transparent_70%)] md:w-[440px]"
      />
    </div>
  );
}

export function SiteHeader({
  dict,
  logoHref = "#top",
  projectsHref = "#projetos",
  agencyHref = "#agencia",
  aboutHref = "#sobre",
}: {
  dict: Dictionary;
  logoHref?: string;
  projectsHref?: string;
  agencyHref?: string;
  aboutHref?: string;
}) {
  const nav = dict.site.page.home.landing.nav;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-border bg-card/60 px-5 py-3 backdrop-blur-xl md:px-7">
        <a href={logoHref} className="font-display text-base font-bold tracking-tight">
          <BrandMark />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href={projectsHref} className="transition-colors hover:text-foreground">
            {nav.projects}
          </a>
          <a href={agencyHref} className="transition-colors hover:text-foreground">
            {nav.agency}
          </a>
          <a href={aboutHref} className="transition-colors hover:text-foreground">
            {nav.about}
          </a>
        </nav>
        <Button asChild className="rounded-full px-4 py-2">
          <a href={SITE_LINKS.whatsapp} target="_blank" rel="noreferrer">
            {nav.cta}
          </a>
        </Button>
      </div>
    </header>
  );
}

export function SiteFooter({
  dict,
  year,
}: {
  dict: Dictionary;
  year: number;
}) {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <BrandMark />
        <div className="flex items-center gap-5 text-muted-foreground">
          <a
            href={SITE_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" aria-hidden />
          </a>
          <a
            href={SITE_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" aria-hidden />
          </a>
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="transition-colors hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
          </a>
          <a
            href={SITE_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" aria-hidden />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {year} {dict.site.page.home.landing.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
