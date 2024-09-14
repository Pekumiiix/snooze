import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center">
      <div className="container py-10 flex items-center justify-center bg-main gap-[60px]">
        {link.map((item, index) => (
          <Link href={item.link} key={index} className="text-xl h-[100px]">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="container py-10 flex items-center justify-center bg-main gap-[60px]">
        <p className="text-xl">Contact Us: support@snoozeapp.com</p>
        <p className="text-xl">Follow Us on Social Media: @snoozeapp</p>
        <p className="text-xl">Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
}

interface Link {
  link: string;
  name: string;
}

const link: Link[] = [
  { link: "/about-us", name: "About us" },
  { link: "/contact-us", name: "Contact us" },
  { link: "/privacy-policy", name: "Privacy policy" },
];
