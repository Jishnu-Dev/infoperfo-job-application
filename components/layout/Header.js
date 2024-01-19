import { Fragment } from "react";
import Ribbon from "@/components/layout/Ribbon";
import { ArrowUpAZ, ArrowUpNarrowWide, Expand } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <Fragment>
      <Ribbon />
      <header className="bg-white shadow-2xl border-b">
        <div className="container flex justify-between py-5">
          <Branding />
          <PcMenu />
        </div>
      </header>
    </Fragment>
  );
}

const Branding = () => (
  <Link href="/">
    <h1 className="text-2xl font-semibold text-primary uppercase leading-5 flex gap-1 items-center">
      <Expand size={44} />
      INFO
      <br />
      PERFORMANCE
    </h1>
  </Link>
);

const PcMenu = () => {
  const links = [
    {
      label: "Platform",
      link: "platfoms",
    },
    {
      label: "Solutions",
      link: "splutions",
    },
    {
      label: "Resources",
      link: "resources",
    },
    {
      label: "Partners",
      link: "partners",
    },
    {
      label: "Company",
      link: "company",
    },
  ];

  return (
    <menu className="flex gap-6">
      <ul className="h-full flex gap-6 items-center">
        {links.map(({ label, link }) => (
          <li className="text-lg text-black hover:text-primary hover:underline">
            <Link key={link} href={`/jishnu/${link}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <GetInTouch />
    </menu>
  );
};

const GetInTouch = () => <Button>Get in Touch</Button>;
