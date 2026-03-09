const PARTNERS = [
  { name: "AWS", icon: "☁" },
  { name: "Google", icon: "G" },
  { name: "Airbnb", icon: "A" },
  { name: "Spotify", icon: "S" },
  { name: "Slack", icon: "S" },
  { name: "Stripe", icon: "S" },
];

export function SocialPartners() {
  return (
    <section className="py-12 lg:py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-gray-400 mb-10 uppercase tracking-[0.2em]">
          Empresas que confiam na Jellyfish
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {PARTNERS.map(({ name }) => (
            <div
              key={name}
              className="flex justify-center text-4xl text-gray-400 hover:text-brand-primary transition-colors font-bold"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
