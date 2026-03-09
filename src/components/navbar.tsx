"use client";

import { useState } from "react";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import Image from "next/image";

interface NavBarProps {
  dict: any;
  lang: string;
}

export default function NavBar({ dict, lang }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex justify-between py-2 px-8 items-center">
        <ul className="flex flex-row place-content-center items-center gap-5">
          <li className="flex flex-row place-content-center items-center gap-1">
            <a href="/">
              <Image
                src="/jellyfishlogo.svg"
                width={25}
                height={24}
                alt="jellyfish logo"
                className="dark:invert"
              />
            </a>
            <a href="/">
              <h1 className="font-extrabold">
                JellyFish<span className="text-sm font-normal">.dev</span>
              </h1>
            </a>
          </li>
        </ul>

        <button
          className="hidden max-[425px]:block items-center text-xl transition-transform duration-300 transform"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <Cross1Icon width={24} height={24} />
          ) : (
            <HamburgerMenuIcon width={24} height={24} />
          )}
        </button>

        <ul
          className={`max-[425px]:hidden flex  lg:place-content-center lg:items-center gap-5 lg:flex-row`}
        >
          <li>
            <a className="text-sm hover:text-muted" href={`/${lang}/projects`}>
              {dict.site.common.projects}
            </a>
          </li>
          <li>
            <a className="text-sm hover:text-muted" href={`/${lang}/about`}>
              {dict.site.common.about}
            </a>
          </li>
          <li>
            <a className="text-sm hover:text-muted" href={`/${lang}/contact`}>
              {dict.site.common.contact}
            </a>
          </li>
          <li>
            <a className="text-sm hover:text-muted" href={`/${lang}/social`}>
              {dict.site.common.agency}
            </a>
          </li>
          <li className="flex flex-row place-content-center items-center gap-5 mt-2 lg:mt-0">
            <a href="https://github.com/JellyFishDevelopment" target="_blank">
              <GitHubLogoIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/jellyfish-dev"
              target="_blank"
            >
              <LinkedInLogoIcon />
            </a>
            <a
              href="https://www.instagram.com/jellyfishdevelopment/"
              target="_blank"
            >
              <InstagramLogoIcon />
            </a>
          </li>
        </ul>
      </nav>
      <ul
        className={`  lg:place-content-center lg:items-center gap-5 transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden  sm:hidden text-center`}
      >
        <li>
          <a className="text-sm hover:text-muted" href={`/${lang}/projects`}>
            {dict.site.common.projects}
          </a>
        </li>
        <li>
          <a className="text-sm hover:text-muted" href={`/${lang}/about`}>
            {dict.site.common.about}
          </a>
        </li>
        <li>
          <a className="text-sm hover:text-muted" href={`/${lang}/contact`}>
            {dict.site.common.contact}
          </a>
        </li>
        <li>
          <a className="text-sm hover:text-muted" href={`/${lang}/social`}>
            {dict.site.common.agency}
          </a>
        </li>
        <li className="flex flex-row place-content-center items-center max-[425px]:p-4 gap-5 mt-2 lg:mt-0">
          <a href="https://github.com/JellyFishDevelopment" target="_blank">
            <GitHubLogoIcon />
          </a>
          <a href="#">
            <LinkedInLogoIcon />
          </a>
          <a
            href="https://www.instagram.com/jellyfishdevelopment/"
            target="_blank"
          >
            <InstagramLogoIcon />
          </a>
        </li>
      </ul>
    </header>
  );
}
