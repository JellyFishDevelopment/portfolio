export const ptBR = {
    site: {
        common: {
            projects: 'Projetos',
            about: 'Quem Somos',
            contact: 'Contato',
            agency: 'Agência',
            home: 'Inicio',
            github: 'GitHub',
            instagram: 'Instagram'
        },
        page: {
            home: {
                screen1: {
                    slogan: 'Com você, somos capazes de moldar o futuro digital de forma inovadora e envolvente ✨',
                    ourServicesButton: 'Nossos serviços',
                    moreButton: 'Conheça mais do nosso trabalho',
                },
                screen2: {
                    lastProjects: 'Nossos últimos projetos realizados',
                    cards: {
                        text: [
                            {
                                title: 'SDS Wiki',
                                body: 'Site dinâmico e minimalista de busca e documentação sobre Software Defined Storage baseado em Astro, utilizando arquivos em markdown.',
                            },
                            {
                                title: 'JM Elétrica',
                                body: 'Site institucional sobre elétrica e soluções em energia, usando API de envio de e-mail, baseado em React.',
                            },
                            {
                                title: 'Luciana Advocacia',
                                body: 'Site estático desenvolvido para assessoria e consultoria de advocacia jurídica.',
                            },
                        ],
                        button: 'Visitar o Website',
                    },
                    moreButton: 'Veja mais',
                },
                screen3: {
                    about: {
                        title: 'Sobre nós',
                        body:
                        `<p className="pb-4">
                            Na Jelly<span className="Fish font-bold">Fish</span> Development,
                            somos mais do que uma desenvolvedora de softwares; somos
                            arquitetos digitais dedicados a transformar suas ideias em
                            soluções inovadoras.
                          </p>
                          <p className="pb-4">
                            Com uma abordagem ágil e comprometimento com a excelência,
                            oferecemos serviços de desenvolvimento mobile, desktop e web
                            personalizados especialmente para você.
                          </p>`,
                        footer: `<br></br> Estamos prontos para levar sua visão ao <b><span class='Fish select-none'> próximo nível</span></b> 🚀`,
                        button: 'Conheça quem somos'
                    },
                    workTogether: {
                        title: 'Vamos trabalhar juntos',
                        body:
                            `Nós acreditamos no poder da colaboração para criar soluções digitais revolucionárias 🌟
                            <br></br>
                            Se você tem uma visão, nós temos a ferramenta pra te levar além. Venha transformar seus em realidade.`,
                        footer: `<b><span class="Fish select-none">Conecte-se</span></b> agora conosco e embarque nesta jornada`,
                        button: 'Vamos conversar!'
                    }
                }
            },
            projects: {
                category: 'Front-end/Web',
                projects: [
                    {
                        title: 'SDS Wiki',
                        description: 'Site de busca e documentação sobre Software Defined Storage baseado em Astro, utilizando arquivos em markdown.'
                    },
                    {
                        title: 'JM Eng. Elétrica',
                        description: 'Site institucional sobre elétrica e soluções em energia, usando API de envio de e-mail, baseado em React.'
                    },
                    {
                        title: 'Luciana Advocacia',
                        description: 'Site estático dedicado à Consultoria Jurídica, projetado para fornecer informações sobre os serviços jurídicos oferecidos.'
                    },
                    {
                        title: 'Sistema Imobiliário',
                        description: 'Sistema dinâmico para gerenciar imóveiss, imobiliárias com seus devidos corretores com filtros e geração de rellatório'
                    },
                ]
            },
            about: {
                title: 'Quem<span class="Fish">Somos</span>',
                subtitle: 'o time por trás da excelência e inovação que <strong>acontece</strong> 💡',
                label: 'Idealizadores',
                cards: [
                    {
                        name: 'Leticia Boza',
                        bio: 'QA, Product Owner, Front-End Developer'
                    },
                    {
                        name: 'Mohan Elias',
                        bio: 'Front-end Developer'
                    },
                    {
                        name: 'Luiz Mateus',
                        bio: 'DevOps, Infra, Back-End Developer'
                    },
                    {
                        name: 'Felipe Souza',
                        bio: 'Back-End Developer, Data Base'
                    },
                ]
            },
            contact: {
                description: 'entre em contato agora para te ajudarmos a <strong>acontecer</strong> ❇️'
            },
            social: {
                nav: { home: 'Início', services: 'Serviços', cases: 'Cases', about: 'Agência', testimonials: 'Depoimentos', cta: 'Falar com Consultor' },
                hero: { badge: 'Disponível para novos projetos', title: 'Agência Digital de', titleHighlight: 'Alta Performance', subtitle: 'Transformamos marcas através de estratégias de social media, branding e performance. Resultados reais para empresas que buscam crescimento.', ctaPrimary: 'Solicitar Proposta', ctaSecondary: 'Ver Cases' },
                partners: { title: 'Empresas que confiam na Jellyfish' },
                services: { label: 'Nossos Serviços', title: 'Abordagem completa para resultados máximos', link: 'Ver todos os serviços' },
                cases: { label: 'Cases de Sucesso', title: 'Resultados em', titleHighlight: 'números', cta: 'Ver todos os cases' },
                about: { label: 'Metodologia', title: 'Não somos apenas uma agência, somos seu parceiro de crescimento', steps: ['Imersão & Diagnóstico', 'Planejamento Estratégico', 'Execução & Otimização'] },
                testimonials: { label: 'Depoimentos', title: 'O que dizem nossos parceiros' },
                contact: { title: 'Pronto para escalar sua marca?', subtitle: 'Vamos conversar sobre seus objetivos e desenhar uma estratégia personalizada para o seu negócio.', email: 'Email', whatsapp: 'WhatsApp', formSubmit: 'Enviar Solicitação' },
                footer: { company: 'Empresa', services: 'Serviços', newsletter: 'Novidades', newsletterPlaceholder: 'Seu e-mail', copyright: 'Jellyfish Agency. Todos os direitos reservados.', madeWith: 'Feito com' }
            }
        },
        component: {
            contactForm: {
                alert: 'Mensagem enviada!',
                email: 'E-mail de contato:',
                emailPlaceholder: 'Seu melhor e-mail para contatarmos 📧',

                subject: 'Assunto: ',
                subjectPlaceholder: 'Diga o nome do seu sonho e por onde ele será realizado ☁️',

                message: 'Nos diga no que nós podemos te ajudar: ',
                messagePlaceholder: 'Nos dê informações sobre suas ideias 💡',
                submitButton: 'Enviar'
            }
        }
    }
}