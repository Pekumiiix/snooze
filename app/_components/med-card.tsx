import Image from "next/image";

export default function MeditationCard({
  type,
  image,
  title,
  subtitle,
}: CardProps) {
  return (
    <div className="flex flex-col items-center px-3 gap-5">
      <Image src={image} alt="Illustartion" height={100} width={100} />

      <div className="flex flex-col gap-2 items-center">
        <p className="text-main text-xl">{title}</p>
        <p
          className={
            type === "playlist"
              ? "font-medium text-[28px] text-main"
              : "text-[#00000080]"
          }
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

interface CardProps {
  type?: "playlist";
  image: string;
  title: string;
  subtitle: string;
}
