import logo from "../../public/jellyfishlogo.svg";
import Image from "next/image";
import instagramLogo from "../../public/svg-tec/instagram_logo.svg";
import linkedinLogo from "../../public/svg-tec/linkedin_logo.svg";
import whatsappLogo from "../../public/svg-tec/whatsapplogo.svg";
import type { Dictionary } from "@/dictionaries/default-dictionaries";

export function Footer({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {

  return (
    <div className="max-[425px]:p-0  max-[425px]:p-4 pl-56 pr-56 py-10 grid max-[768px]:grid-cols-1 max-[768px]:content-center">
      <div className="flex max-[425px]:flex-col flex-col-2 justify-between">
        <a href="#">
          <Image
            className="ml-10 mb-10 max-[425px]:w-[40px]"
            src={logo}
            width="100"
            alt="sds wiki project"
          />
        </a>
        <div className="flex gap-4 place-items-center">
          <a
            href="https://www.instagram.com/jellyfishdevelopment/"
            target="_blank"
          >
            <Image
              className="hover:scale-105 max-[425px]:w-[20px] ease-in-out duration-300"
              src={instagramLogo}
              width={40}
              height={40}
              alt="instagram logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/jellyfish-dev"
            target="_blank"
          >
            <Image
              className="hover:scale-105 max-[425px]:w-[20px] ease-in-out duration-300"
              src={linkedinLogo}
              width={40}
              height={40}
              alt="linkedin logo"
            />
          </a>

          <a href="https://wa.me/5513991063173" target="_blank">
            <Image
              className="hover:scale-105 max-[425px]:w-[20px] ease-in-out duration-300"
              src={whatsappLogo}
              width={40}
              height={40}
              alt="whatsapp logo"
            />
          </a>
        </div>
      </div>

      <div className="max-[425px]:m-0 max-[425px]:mt-4 ml-12 flex flex-col gap-4 w-full">
        <div className="flex max-[425px]:text-sm max-[425px]:flex-col flex-row gap-10">
          <a href={`/${lang}/`} className="hover:text-muted">
            {dict.site.common.home}
          </a>
          <a href={`/${lang}/projects`} className="hover:text-muted">
            {dict.site.common.projects}
          </a>
          <a href={`/${lang}/about`} className="hover:text-muted">
            {dict.site.common.about}
          </a>
          <a href={`/${lang}/contact`} className="hover:text-muted">
            {dict.site.common.contact}
          </a>
        </div>
        <div className="text-sm ">
          <p>© 2024 Jellyfish Development. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
