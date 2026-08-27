"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { normalizeLocale } from "@/config/i18n.config";
import type { Dictionary } from "@/dictionaries/default-dictionaries";

export function LayoutWrapper({
  children,
  lang,
  dict,
}: {
  children: React.ReactNode;
  lang: string;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const locale = normalizeLocale(lang);
  const isSocialLanding = pathname?.includes("/social") ?? false;
  const pathWithoutLang =
    pathname?.replace(/^\/(en-US|en-us|en|pt-BR|pt-br|pt)(?=\/|$)/i, "") ?? "";
  const isHome = pathWithoutLang === "" || pathWithoutLang === "/";
  const isAbout = pathWithoutLang === "/about";
  const hideChrome = isSocialLanding || isHome || isAbout;

  return (
    <>
      {!hideChrome && <NavBar dict={dict} lang={locale} />}
      {children}
      {!hideChrome && (
        <div className="bg-black">
          <Footer dict={dict} lang={locale} />
        </div>
      )}
    </>
  );
}
