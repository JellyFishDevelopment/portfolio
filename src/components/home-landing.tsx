import Image from "next/image";
import { ArrowUpRight, Github, Globe, Server, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TECH_STACK } from "@/components/logos-tech";
import { Marquee, MarqueeFade } from "@/components/ui/marquee";
import { SiteFooter, SiteHeader, SITE_LINKS, HeroJellyfish } from "@/components/site-chrome";
import type { Dictionary } from "@/dictionaries/default-dictionaries";
import { cn } from "@/lib/utils";

const PROJECT_MEDIA: {
  href?: string;
  image: string;
  reversed: boolean;
}[] = [
  {
    href: "https://www.sistema-abelha.com.br/",
    image: "/sistema-abelha.png",
    reversed: false,
  },
  {
    href: "https://jm-eletrica.vercel.app/",
    image: "/jm-eletrica.png",
    reversed: true,
  },
  {
    href: "https://site-luciana-adv.vercel.app/",
    image: "/luciana-advogada.png",
    reversed: false,
  },
];

const SERVICE_ICONS = [Globe, Smartphone, Server];

export function HomeLanding({
  dict,
  lang,
  year,
}: {
  dict: Dictionary;
  lang: string;
  year: number;
}) {
  const copy = dict.site.page.home.landing;

  return (
    <div className="home-theme min-h-screen bg-background font-sans text-foreground">
      <SiteHeader
        dict={dict}
        logoHref="#top"
        projectsHref="#projetos"
        agencyHref={`/${lang}/social`}
        aboutHref={`/${lang}/about`}
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
              <h1 className="mt-6 text-5xl leading-[1.12] font-bold md:text-7xl">
                {copy.hero.titleBefore}
                <span className="text-aurora">{copy.hero.titleHighlight}</span>
                {copy.hero.titleAfter}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                {copy.hero.description}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="glow-ring h-auto rounded-full px-6 py-3 transition-transform hover:-translate-y-0.5"
                >
                  <a href="#projetos">
                    {copy.hero.viewProjects}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto gap-2 rounded-full border-border bg-transparent px-6 py-3 hover:bg-secondary"
                >
                  <a href={SITE_LINKS.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" aria-hidden />
                    {copy.hero.github}
                  </a>
                </Button>
              </div>
              <dl className="mt-14 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
                {copy.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-2xl font-bold">{stat.value}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <HeroJellyfish />
          </div>
        </section>

        <section
          id="stack"
          aria-label={copy.hero.stats[1]?.label}
          className="border-y border-border py-6"
        >
          <Marquee pauseOnHover className="[--duration:32s] [--gap:3rem]">
            {TECH_STACK.map((tech) => (
              <Image
                key={tech.name}
                src={tech.src}
                alt={tech.name}
                title={tech.name}
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 object-contain opacity-80 transition duration-500 hover:-translate-y-1 hover:opacity-100"
              />
            ))}
            <MarqueeFade fade="horizontal" />
          </Marquee>
        </section>

        <section id="projetos" className="relative px-6 py-24 md:py-32">
          <div
            className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[80%] max-w-4xl -translate-x-1/2 rounded-full opacity-[0.12] blur-[130px]"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 text-xs tracking-widest text-primary uppercase">
                  <span className="h-px w-8 bg-primary/60" />
                  {copy.projects.label}
                </p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  {copy.projects.title}
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                {copy.projects.subtitle}
              </p>
            </div>
            <div className="mt-16 space-y-16 md:space-y-24">
              {copy.projects.items.map((project, index) => {
                const media = PROJECT_MEDIA[index];
                const stackItems = project.stack.split("·").map((item) => item.trim());
                const isLink = Boolean(media.href);
                const Wrapper = isLink ? "a" : "div";
                return (
                  <Wrapper
                    key={project.title}
                    {...(isLink
                      ? { href: media.href, target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="group relative grid items-center gap-8 md:grid-cols-2 md:gap-14"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute -top-10 z-0 select-none font-display text-[7rem] font-bold leading-none text-foreground/[0.04] md:text-[10rem]",
                        media.reversed ? "right-0 md:-right-4" : "left-0 md:-left-4"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className={cn("relative z-10", media.reversed && "md:order-2")}>
                      <div className="surface-card relative overflow-hidden rounded-2xl p-1.5 transition-transform duration-500 group-hover:-translate-y-1">
                        <Image
                          src={media.image}
                          alt={project.alt}
                          width={1280}
                          height={800}
                          className="w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        {isLink && (
                          <>
                            <div className="pointer-events-none absolute inset-1.5 rounded-xl bg-gradient-to-t from-background/80 via-background/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <span className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 translate-y-3 items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-foreground opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                              {copy.projects.visit}
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className={cn("relative z-10 flex flex-col justify-center", media.reversed && "md:order-1")}>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="rounded-full border border-border bg-card/40 px-2.5 py-0.5">
                          {project.year}
                        </span>
                        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                      </div>
                      <h3 className="mt-5 text-3xl font-bold transition-colors duration-300 group-hover:text-aurora md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-md text-muted-foreground">{project.body}</p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {stackItems.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      {isLink && (
                        <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">
                          {copy.projects.visit}
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden
                          />
                        </span>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </section>

        <section id="sobre" className="relative px-6 pb-24 md:pb-32">
          <div
            className="pointer-events-none absolute left-0 top-10 h-[360px] w-[60%] max-w-2xl rounded-full opacity-[0.1] blur-[130px]"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="inline-flex items-center gap-2 text-xs tracking-widest text-primary uppercase">
                  <span className="h-px w-8 bg-primary/60" />
                  {copy.about.label}
                </p>
                <h2 className="mt-4 text-4xl font-bold leading-[1.1] md:text-5xl">
                  {copy.about.title}
                </h2>
                <p className="mt-6 max-w-md text-muted-foreground">{copy.about.body}</p>
              </div>
              <div className="grid gap-4">
                {copy.about.services.map((service, index) => {
                  const Icon = SERVICE_ICONS[index] ?? Globe;
                  return (
                    <Card
                      key={service.title}
                      className="surface-card group relative overflow-hidden border-0 bg-transparent shadow-none transition-transform duration-500 hover:-translate-y-1"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <CardContent className="flex items-start gap-5 p-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-card/60 text-primary transition-colors duration-500 group-hover:border-primary/40">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-semibold">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {service.body}
                          </p>
                        </div>
                        <span className="ml-auto text-xs font-medium tabular-nums text-muted-foreground/50">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <Card className="surface-card relative mx-auto max-w-6xl overflow-hidden border-0 bg-transparent shadow-none">
            <CardContent className="px-8 py-16 text-center md:py-24">
              <div
                className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-64 w-2/3 rounded-full opacity-35 blur-[100px]"
                style={{ background: "var(--gradient-aurora)" }}
              />
              <h2 className="relative text-4xl font-bold md:text-6xl">
                {copy.cta.titleBefore}
                <span className="text-aurora">{copy.cta.titleHighlight}</span>
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">
                {copy.cta.body}
              </p>
              <Button
                asChild
                className="glow-ring relative mt-9 h-auto rounded-full px-7 py-3.5 transition-transform hover:-translate-y-0.5"
              >
                <a href={SITE_LINKS.whatsapp} target="_blank" rel="noreferrer">
                  {copy.cta.button}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
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
