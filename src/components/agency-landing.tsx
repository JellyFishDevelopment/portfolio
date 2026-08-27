import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Lightbulb,
  Link2,
  Megaphone,
  MessageCircle,
  Palette,
  PenLine,
  Quote,
  TrendingUp,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Marquee, MarqueeFade } from "@/components/ui/marquee";
import { SiteFooter, SiteHeader, SITE_LINKS, HeroJellyfish } from "@/components/site-chrome";
import { normalizeLocale } from "@/config/i18n.config";
import type { Dictionary } from "@/dictionaries/default-dictionaries";

const PILLARS = ["Estratégia", "Criação", "Performance", "Branding", "Ads", "SEO"];

const SERVICES = [
  {
    icon: Megaphone,
    title: "Social Media",
    description:
      "Gestão estratégica dos seus perfis: planejamento, acompanhamento de métricas e comunidade. Orientamos a linha editorial.",
    items: ["Gestão de perfis", "Estratégia e métricas", "Community Management"],
  },
  {
    icon: TrendingUp,
    title: "Performance Ads",
    description:
      "Campanhas de tráfego pago otimizadas para conversão e ROI positivo em todas as plataformas.",
    items: ["Meta Ads (Facebook/Insta)", "Google Ads & Youtube", "TikTok Ads"],
  },
  {
    icon: PenLine,
    title: "Branding & Design",
    description:
      "Identidade visual marcante que conecta sua marca ao público certo e transmite seus valores.",
    items: ["Identidade Visual", "Rebranding", "Materiais Gráficos"],
  },
];

const CASES = [
  { image: "/case1.jpeg", client: "Sorrir Faz Bem - Santos", metric: "Odontologia" },
  { image: "/case2.jpeg", client: "Brasil Sorriso - Centro", metric: "Clínica odontológica" },
  { image: "/case3.jpeg", client: "Py013", metric: "Comunidade de Tecnologia" },
  { image: "/case4.jpeg", client: "Instituto Reserva Musical", metric: "Instituto de Música" },
  { image: "/case5.jpeg", client: "Brechó Maria Flor", metric: "Brechó de Roupas" },
  { image: "/case6.jpeg", client: "OpsomCar", metric: "Mecânica Automotiva" },
];

const METHOD = [
  {
    tag: "Fundação",
    title: "Visual & Autonomia",
    icon: Palette,
    items: [
      "Manual de Identidade Visual técnico.",
      "Templates editáveis (Canva/PS) para posts recorrentes.",
    ],
    result: "Autonomia total com padrão internacional.",
  },
  {
    tag: "Infraestrutura",
    title: "Canais & SEO",
    icon: Link2,
    items: [
      "Otimização técnica de perfil (SEO) para busca.",
      "Arquitetura de links (Linktree Pro) para conversão.",
    ],
    result: "Casa arrumada e portas de entrada otimizadas.",
  },
  {
    tag: "Inteligência",
    title: "Estratégia & Workflow",
    icon: Lightbulb,
    items: [
      "Manual de produção de conteúdo (ferramentas e métodos).",
      "Calendário editorial estratégico e roteirização.",
    ],
    result: "Mapa claro do que, como e quando postar.",
  },
  {
    tag: "Motor",
    title: "Performance & Growth",
    icon: Zap,
    items: [
      "Gestão de Meta Ads focada em público-alvo.",
      "Análise de dados e relatórios de performance.",
    ],
    result: "Aceleração de alcance e escala de marca.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "A equipe é extremamente proativa e criativa. Os relatórios são claros e os resultados aparecem no faturamento. Recomendo demais!",
    name: "Maria Rosa",
    role: "Fundadora, Brechó Maria Flor",
    avatar: "/maria-flor.jpg",
  },
  {
    quote:
      "A Jellyfish transformou nossa presença digital. Saímos de uma marca desconhecida para referência no setor em menos de 6 meses.",
    name: "Felipe Saurim",
    role: "CEO, OpsomCar",
    avatar: "/felipe-opsom.jpg",
  },
  {
    quote:
      "O atendimento é o diferencial. Eles realmente vestem a camisa da empresa e se preocupam com cada detalhe das campanhas.",
    name: "Cláudio Guilen",
    role: "Maestro, Instituto Reserva Musical",
    avatar: "/guilen.jpg",
  },
];

export function AgencyLanding({
  dict,
  lang,
  year,
}: {
  dict: Dictionary;
  lang: string;
  year: number;
}) {
  const copy = dict.site.page.social;
  const locale = normalizeLocale(lang);
  const home = `/${locale}`;

  return (
    <div className="home-theme min-h-screen bg-background font-sans text-foreground">
      <SiteHeader
        dict={dict}
        logoHref={home}
        projectsHref={`${home}#projetos`}
        agencyHref="#top"
        aboutHref={`${home}/about`}
      />

      <main id="top">
        <section className="relative overflow-hidden px-6 pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="grid-backdrop pointer-events-none absolute inset-0" />
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs tracking-widest text-muted-foreground uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {copy.hero.badge}
              </span>
              <h1 className="mt-6 text-5xl leading-[0.95] font-bold md:text-7xl">
                {copy.hero.title}{" "}
                <span className="text-aurora">{copy.hero.titleHighlight}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                {copy.hero.subtitle}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="glow-ring h-auto rounded-full px-6 py-3 transition-transform hover:-translate-y-0.5"
                >
                  <a href="#contato">
                    {copy.hero.ctaPrimary}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto rounded-full border-border bg-transparent px-6 py-3 hover:bg-secondary"
                >
                  <a href="#cases">{copy.hero.ctaSecondary}</a>
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground">
                {["Estratégia", "Criação", "Performance"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" aria-hidden />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <HeroJellyfish />
          </div>
        </section>

        <section className="border-y border-border py-6">
          <Marquee pauseOnHover className="[--duration:32s] [--gap:3rem]">
            {PILLARS.map((item) => (
              <span
                key={item}
                className="font-display text-lg whitespace-nowrap text-muted-foreground"
              >
                {item}
              </span>
            ))}
            <MarqueeFade fade="horizontal" />
          </Marquee>
        </section>

        <section id="servicos" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div>
              <p className="text-xs tracking-widest text-primary uppercase">
                {copy.services.label}
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                {copy.services.title}
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {SERVICES.map(({ icon: Icon, title, description, items }) => (
                <Card
                  key={title}
                  className="surface-card border-0 bg-transparent shadow-none"
                >
                  <CardHeader className="p-6 pb-0">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card/60 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <CardTitle className="font-display text-xl font-semibold">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">{description}</p>
                    <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-widest text-primary uppercase">
                  {copy.cases.label}
                </p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  {copy.cases.title}{" "}
                  <span className="text-aurora">evidências</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Alguns dos trabalhos que fizemos nos perfis de Instagram dos nossos
                clientes: criação, gestão e estratégia em ação.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {CASES.map(({ image, client, metric }) => (
                <Card
                  key={client}
                  className="surface-card group overflow-hidden border-0 bg-transparent shadow-none"
                >
                  <CardContent className="relative aspect-[1/2] overflow-hidden p-0">
                    <Image
                      src={image}
                      alt={`Print Instagram — ${client}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4">
                      <p className="font-display text-sm font-semibold">{client}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{metric}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="metodologia" className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs tracking-widest text-primary uppercase">
                {copy.about.label}
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">{copy.about.title}</h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {METHOD.map(({ tag, title, icon: Icon, items, result }) => (
                <Card
                  key={title}
                  className="surface-card border-0 bg-transparent shadow-none"
                >
                  <CardHeader className="p-6 pb-0">
                    <p className="text-xs tracking-widest text-primary uppercase">{tag}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <CardTitle className="font-display text-lg font-semibold">
                        {title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-5 border-t border-border pt-4 text-sm font-medium">
                      Resultado: {result}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs tracking-widest text-primary uppercase">
                {copy.testimonials.label}
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                {copy.testimonials.title}
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map(({ quote, name, role, avatar }) => (
                <Card
                  key={name}
                  className="surface-card border-0 bg-transparent shadow-none"
                >
                  <CardContent className="relative p-6">
                    <Quote
                      className="absolute right-6 top-6 h-8 w-8 text-primary/30"
                      aria-hidden
                    />
                    <p className="pr-8 text-sm text-muted-foreground">{quote}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <Image
                        src={avatar}
                        alt=""
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full border border-border object-cover"
                      />
                      <div>
                        <p className="font-display text-sm font-semibold">{name}</p>
                        <p className="text-xs text-muted-foreground">{role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="px-6 pb-24">
          <Card className="surface-card relative mx-auto max-w-6xl overflow-hidden border-0 bg-transparent shadow-none">
            <CardContent className="px-8 py-16 text-center md:py-24">
              <div
                className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-64 w-2/3 rounded-full opacity-35 blur-[100px]"
                style={{ background: "var(--gradient-aurora)" }}
              />
              <h2 className="relative text-4xl font-bold md:text-6xl">
                {copy.contact.title}
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">
                {copy.contact.subtitle}
              </p>
              <Button
                asChild
                className="glow-ring relative mt-9 h-auto gap-2 rounded-full px-7 py-3.5 transition-transform hover:-translate-y-0.5"
              >
                <a href={SITE_LINKS.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  {dict.site.page.home.landing.nav.cta}
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter dict={dict} year={year} />
    </div>
  );
}
