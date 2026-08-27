import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";
import { AboutLanding } from "@/components/about-landing";

export default function Page({ params }: { params: { lang: string } }) {
  const dict = getDictionaryServerOnly(params.lang);

  return (
    <AboutLanding dict={dict} lang={params.lang} year={new Date().getFullYear()} />
  );
}
