import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";
import { HomeLanding } from "@/components/home-landing";

export default function Home({ params }: { params: { lang: string } }) {
  const dict = getDictionaryServerOnly(params.lang);

  return <HomeLanding dict={dict} lang={params.lang} year={new Date().getFullYear()} />;
}
