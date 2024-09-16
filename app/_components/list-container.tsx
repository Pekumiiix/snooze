import Image from "next/image";

export default function ListContainer({
  type,
  image,
  title,
  subtitle,
}: ListProps) {
  return (
    <div
      className={`${
        type === "mood-page" ? "border-b pb-4 items-center" : "border p-4"
      } flex border-[#0000001A] rounded-[6px] gap-4`}
    >
      <Image
        src={image}
        alt={title}
        width={type ? 60 : 100}
        height={type ? 60 : 100}
        className={type && "rounded-full"}
      />

      <div className={`flex flex-col ${type ? "gap-0" : "gap-2"}`}>
        <p className="text-main text-xl font-medium">{title}</p>
        <p className={type ? "text-[#00000080]" : "text-main"}>{subtitle}</p>
      </div>
    </div>
  );
}

interface ListProps {
  type?: "mood-page";
  image: string;
  title: string;
  subtitle: string;
}
