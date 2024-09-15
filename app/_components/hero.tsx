import ButtonComponent from "./button";

export default function HeroSection({
  className = "",
  title,
  description,
  button,
}: HeroProps) {
  return (
    <section
      className={`min-w-full max-w-[1536px] px-0 flex flex-col items-center justify-center gap-6 bg-cover bg-center ${className}`}
    >
      <p className="text-[40px] leading-[48px] max-w-[504px] text-white text-center">
        {title}
      </p>
      <p className="text-xl text-white">{description}</p>

      <ButtonComponent className="bg-accentMain" text={button} />
    </section>
  );
}

interface HeroProps {
  className: string;
  title: string;
  description: string;
  button: string;
}
