import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-fit bg-white flex justify-center">
      <nav className="container flex items-center justify-between py-5 px-[100px]">
        <div className="flex items-center gap-4">
          <Image
            src={`/assets/images/logo.png`}
            alt="Logo"
            height={40}
            width={40}
          />

          <p className="font-bold font-telma text-[28px] text-main">
            SN<span className="text-accentMain">OO</span>ZE
          </p>
        </div>

        <div className="flex items-center gap-10">
          {links.map((item, index: number) => (
            <Button
              variant={`link`}
              asChild
              key={index}
              className={`${
                item.isActive ? "text-main underline" : "text-black"
              } hover:text-main transition-all duration-200`}
            >
              <Link href={item.link}>{item.name}</Link>
            </Button>
          ))}

          <Button variant={`link`} asChild className="text-main font-medium">
            <Link href={`/login`}>Login</Link>
          </Button>

          <Button
            variant={`default`}
            className="text-white font-semibold text-lg p-4 rounded-[8px] bg-[#1C5A5A] w-[220px]"
          >
            Try Snooze For Free
          </Button>
        </div>
      </nav>
    </header>
  );
}

interface Link {
  link: string;
  name: string;
  isActive: boolean;
}

const links: Link[] = [
  { link: "/", name: "Home", isActive: true },
  { link: "/meditation", name: "Meditations", isActive: false },
  { link: "/just-breathe", name: "Just Breathe", isActive: false },
  { link: "/mood-tracker", name: "Mood tracker", isActive: false },
  { link: "/profile", name: "Profile", isActive: false },
];
