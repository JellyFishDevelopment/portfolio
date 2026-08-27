import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Marquee, MarqueeFade } from "@/components/ui/marquee";
import { SiteFooter, SiteHeader, SITE_LINKS, HeroJellyfish } from "@/components/site-chrome";
import type { Dictionary } from "@/dictionaries/default-dictionaries";
import { cn } from "@/lib/utils";

const PROJECT_MEDIA = [
  {
    href: "https://sds-wiki.vercel.app/",
    image: "/sds-wiki.png",
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
] as const;

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
              <h1 className="mt-6 text-5xl leading-[0.95] font-bold md:text-7xl">
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

        <section id="stack" className="border-y border-border py-6">
          <Marquee
            pauseOnHover
            className="[--duration:32s] [--gap:3rem]"
          >
            {copy.stack.map((tech) => (
              <span
                key={tech}
                className="font-display text-lg whitespace-nowrap text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            <MarqueeFade fade="horizontal" />
          </Marquee>
        </section>

        <section id="projetos" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-widest text-primary uppercase">
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
            <div className="mt-14 space-y-8">
              {copy.projects.items.map((project, index) => {
                const media = PROJECT_MEDIA[index];
                return (
                  <a
                    key={project.title}
                    href={media.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <Card className="surface-card overflow-hidden border-0 bg-transparent shadow-none transition-transform hover:-translate-y-1">
                      <CardContent className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
                        <div className={cn(media.reversed && "md:order-2")}>
                          <Image
                            src={media.image}
                            alt={project.alt}
                            width={1280}
                            height={800}
                            className="w-full rounded-xl border border-border object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{project.year}</span>
                            <span className="h-px w-8 bg-border" />
                            <span>{project.stack}</span>
                          </div>
                          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                            {project.title}
                          </h3>
                          <p className="mt-4 text-muted-foreground">{project.body}</p>
                          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                            {copy.projects.visit}
                            <ArrowUpRight
                              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              aria-hidden
                            />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="sobre" className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs tracking-widest text-primary uppercase">
                  {copy.about.label}
                </p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  {copy.about.title}
                </h2>
                <p className="mt-6 text-muted-foreground">{copy.about.body}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {copy.about.services.map((service) => (
                  <Card
                    key={service.title}
                    className="surface-card border-0 bg-transparent shadow-none"
                  >
                    <CardHeader className="p-6">
                      <CardTitle className="font-display text-lg font-semibold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-sm text-muted-foreground">{service.body}</p>
                    </CardContent>
                  </Card>
                ))}
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
