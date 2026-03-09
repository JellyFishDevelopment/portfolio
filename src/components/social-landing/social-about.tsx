"use client";

import Image from "next/image";

const TEAM_IMAGE =
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/c688f7c084-49fa063378a7e5817d96.png";

const IDEALIZADORES = [
  { name: "Leticia Boza", bio: "QA, Product Owner, Front-End Developer", avatar: "/leticia.jpg" },
  { name: "Mohan Elias", bio: "Front-end Developer", avatar: "/mohan.jpg" },
  { name: "Luiz Mateus", bio: "DevOps, Infra, Back-End Developer", avatar: "/luiz.png" },
  { name: "Felipe Souza", bio: "Back-End Developer, Data Base", avatar: "/felipe.jpg" },
];

const STEPS = [
  { title: "Imersão & Diagnóstico", description: "Entendemos sua marca, concorrentes e público antes de criar conteúdo." },
  { title: "Planejamento editorial", description: "Tom de voz, calendário de posts e estratégia por rede." },
  { title: "Criação & Gestão", description: "Posts, stories, métricas e otimização contínua." },
];

export function SocialAbout() {
  return (
    <section id="about" className="py-14 lg:py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src={TEAM_IMAGE}
                  alt="Equipe JellyFish"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />

                <div className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {IDEALIZADORES.map((person) => (
                        <img
                          key={person.name}
                          src={person.avatar}
                          alt={person.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Idealizadores</p>
                      <p className="text-xs text-gray-500">O time por trás da excelência</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-brand-primary text-xs font-bold tracking-wider uppercase mb-3">
              Quem Somos
            </span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Excelência e inovação que acontece
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Na JellyFish cuidamos da presença digital dos nossos clientes: criação de conteúdo,
              gestão de redes, planejamento editorial e tráfego pago. Estratégia e criatividade para
              sua marca crescer no social.
            </p>

            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Metodologia</h3>
            <div className="space-y-4">
              {STEPS.map(({ title, description }, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-0.5">{title}</h4>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
