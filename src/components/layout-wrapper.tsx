"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar";
import { Footer } from "@/components/footer";

export function LayoutWrapper({
  children,
  lang,
  dict,
}: {
  children: React.ReactNode;
  lang: string;
  dict: Record<string, unknown>;
}) {
  const pathname = usePathname();
  const isSocialLanding = pathname?.includes("/social") ?? false;

  return (
    <>
      <NavBar dict={dict} lang={lang} />
      {children}
      {!isSocialLanding && (
        <div className="bg-black">
          <Footer dict={dict} lang={lang} />
        </div>
      )}
    </>
  );
}
