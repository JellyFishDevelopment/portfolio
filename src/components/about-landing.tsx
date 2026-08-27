import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteFooter, SiteHeader, SITE_LINKS } from "@/components/site-chrome";
import { normalizeLocale } from "@/config/i18n.config";
import type { Dictionary } from "@/dictionaries/default-dictionaries";

const TEAM = [
  {
    image: "/leticia.jpg",
    linkedin: "https://www.linkedin.com/in/leticiaboza/",
    github: "https://github.com/LeticiaBoza",
  },
  {
    image: "/mohan.jpg",
    linkedin: "https://www.linkedin.com/in/mohanelias/",
    github: "https://github.com/mdxv",
  },
  {
    image: "/luiz.png",
    linkedin: "https://www.linkedin.com/in/luiz-mateus/",
    github: "https://github.com/LuizMateuss",
  },
  {
    image: "/felipe.jpg",
    linkedin: "https://www.linkedin.com/in/felipe-r-souza-444b17205/",
    github: "https://github.com/felipe-souza17",
  },
] as const;

export function AboutLanding({
  dict,
  lang,
  year,
}: {
  dict: Dictionary;
  lang: string;
  year: number;
}) {
  const copy = dict.site.page.about;
  const homeCopy = dict.site.page.home.landing;
  const home = `/${normalizeLocale(lang)}`;

  return (
    <div className="home-theme min-h-screen bg-background font-sans text-foreground">
      <SiteHeader
        dict={dict}
        logoHref={home}
        projectsHref={`${home}#projetos`}
        agencyHref={`${home}/social`}
        aboutHref="#time"
      />

      <main id="top">
        <section className="relative overflow-hidden px-6 pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="grid-backdrop pointer-events-none absolute inset-0" />
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div className="relative mx-auto max-w-6xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs tracking-widest text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {copy.badge}
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] font-bold md:text-7xl">
              {copy.titleBefore}
              <span className="text-aurora">{copy.titleHighlight}</span>
              {copy.titleAfter}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              {copy.subtitle}
            </p>
          </div>
        </section>

        <section id="time" className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-widest text-primary uppercase">
                  {copy.label}
                </p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  {copy.teamTitle}
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">{copy.body}</p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {copy.cards.map((member, index) => {
                const links = TEAM[index];
                return (
                  <Card
                    key={member.name}
                    className="surface-card border-0 bg-transparent shadow-none transition-transform hover:-translate-y-1"
                  >
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Image
                        src={links.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="h-28 w-28 rounded-full border border-border object-cover"
                      />
                      <h3 className="mt-5 font-display text-lg font-semibold">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                      <div className="mt-5 flex items-center gap-4 text-muted-foreground">
                        <a
                          href={links.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`LinkedIn de ${member.name}`}
                          className="transition-colors hover:text-primary"
                        >
                          <Linkedin className="h-4 w-4" aria-hidden />
                        </a>
                        <a
                          href={links.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub de ${member.name}`}
                          className="transition-colors hover:text-primary"
                        >
                          <Github className="h-4 w-4" aria-hidden />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs tracking-widest text-primary uppercase">
                  {homeCopy.about.label}
                </p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  {homeCopy.about.title}
                </h2>
                <p className="mt-6 text-muted-foreground">{homeCopy.about.body}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {homeCopy.about.services.map((service) => (
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
                {homeCopy.cta.titleBefore}
                <span className="text-aurora">{homeCopy.cta.titleHighlight}</span>
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">
                {homeCopy.cta.body}
              </p>
              <Button
                asChild
                className="glow-ring relative mt-9 h-auto rounded-full px-7 py-3.5 transition-transform hover:-translate-y-0.5"
              >
                <a href={SITE_LINKS.whatsapp} target="_blank" rel="noreferrer">
                  {homeCopy.cta.button}
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
