export default function Card({
  type,
  className,
  image,
  title,
  subtitle,
}: Cardprops) {
  return (
    <div
      className={`flex flex-col border border-[#0000001A] rounded-[6px] ${className}`}
    >
      <img src={image} alt={title} className="h-[340px] w-full" />

      <div className="flex flex-col p-3 gap-1">
        <p className="text-main">{title}</p>
        <p className="text-main text-xl">{subtitle}</p>
      </div>
    </div>
  );
}

interface Cardprops {
  type?: string;
  className?: string;
  image: string;
  title: string;
  subtitle: string;
}
