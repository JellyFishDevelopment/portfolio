import { SocialHero } from "@/components/social-landing/social-hero";
import { SocialPartners } from "@/components/social-landing/social-partners";
import { SocialServices } from "@/components/social-landing/social-services";
import { SocialCases } from "@/components/social-landing/social-cases";
import { SocialAbout } from "@/components/social-landing/social-about";
import { SocialTestimonials } from "@/components/social-landing/social-testimonials";
import { SocialContact } from "@/components/social-landing/social-contact";
import { SocialFooter } from "@/components/social-landing/social-footer";
import { Locale } from "@/config/i18n.config";

export default function SocialPage({
  params,
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="font-sans text-gray-900 bg-white overflow-x-hidden antialiased min-h-screen">
      <main>
        <SocialHero />
        <SocialPartners />
        <SocialServices />
        <SocialCases />
        <SocialAbout />
        <SocialTestimonials />
        <SocialContact />
      </main>
      <SocialFooter lang={params.lang} />
    </div>
  );
}
