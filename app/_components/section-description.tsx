import Image from "next/image";
import ButtonComponent from "./button";

export default function SectionDescription({
  type,
  image,
  title,
  subtitle,
  button,
}: DescriptionProps) {
  return (
    <div className="flex items-center gap-[60px] w-full">
      <Image
        src={image ? image : ""}
        alt={title}
        width={180}
        height={180}
        className={`${type === "image" ? "flex" : "hidden"} rounded-[8px]`}
      />
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[40px] leading-[48px] text-main font-bold">
            {title}
          </p>
          <p className="text-main">{subtitle}</p>
        </div>

        <div className={button === "" ? "hidden" : "flex"}>
          <ButtonComponent text={button} />
        </div>
      </div>
    </div>
  );
}

interface DescriptionProps {
  type: "image" | "no-image";
  image?: string;
  title: string;
  subtitle: string;
  button: string;
}
