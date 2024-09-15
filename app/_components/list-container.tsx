import Image from "next/image";

export default function ListContainer({ image, title, subtitle }: ListProps) {
  return (
    <div className="flex p-4 border border-[#0000001A] rounded-[6px] gap-4">
      <Image src={image} alt={title} width={100} height={100} />

      <div className="flex flex-col gap-2">
        <p className="text-main text-xl font-medium">{title}</p>
        <p className="text-main">{subtitle}</p>
      </div>
    </div>
  );
}

interface ListProps {
  image: string;
  title: string;
  subtitle: string;
}
