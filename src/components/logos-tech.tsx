import type { StaticImageData } from "next/image";
import Image from "next/image";

import reactlogo from "../../public/svg-tec/reactlogo.svg";
import nextjslogo from "../../public/svg-tec/nextjslogo.svg";
import tslogo from "../../public/svg-tec/tslogo.svg";
import twlogo from "../../public/svg-tec/twlogo.svg";
import jslogo from "../../public/svg-tec/jslogo.svg";
import exlogo from "../../public/svg-tec/exlogo.svg";
import mongodblogo from "../../public/svg-tec/mongodblogo.svg";
import phplogo from "../../public/svg-tec/phplogo.svg";
import postgrelogo from "../../public/svg-tec/postgrelogo.svg";
import mysqllogo from "../../public/svg-tec/mysqllogo.svg";
import pythonlogo from "../../public/svg-tec/pythonlogo.svg";
import dockerlogo from "../../public/svg-tec/dockerlogo.svg";

export const TECH_STACK: { name: string; src: StaticImageData }[] = [
  { name: "React", src: reactlogo },
  { name: "Next.js", src: nextjslogo },
  { name: "TypeScript", src: tslogo },
  { name: "JavaScript", src: jslogo },
  { name: "Express", src: exlogo },
  { name: "MySQL", src: mysqllogo },
  { name: "MongoDB", src: mongodblogo },
  { name: "PostgreSQL", src: postgrelogo },
  { name: "PHP", src: phplogo },
  { name: "Tailwind", src: twlogo },
  { name: "Python", src: pythonlogo },
  { name: "Docker", src: dockerlogo },
];

export default function LogosTech() {
  return (
    <div className="mt-11 grid grid-flow-col gap-4">
      {TECH_STACK.map((tech) => (
        <Image
          key={tech.name}
          className="object-contain transition duration-500 ease-in-out hover:-translate-y-2"
          src={tech.src}
          width={100}
          height={100}
          alt={`${tech.name} logo`}
        />
      ))}
    </div>
  );
}
