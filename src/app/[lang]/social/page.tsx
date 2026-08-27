import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";
import { AgencyLanding } from "@/components/agency-landing";

export default function SocialPage({
  params,
}: {
  params: { lang: string };
}) {
  const dict = getDictionaryServerOnly(params.lang);

  return (
    <AgencyLanding dict={dict} lang={params.lang} year={new Date().getFullYear()} />
  );
}
