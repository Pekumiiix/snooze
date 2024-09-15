export default function Card({
  type,
  className,
  image,
  text,
  title,
  subtitle,
}: Cardprops) {
  return (
    <div
      className={`relative flex flex-col border border-[#0000001A] rounded-[6px] ${className}`}
    >
      <img src={image} alt={title} className="h-[340px] w-full" />

      <p
        className={`${
          type === "meditation" ? "flex" : "hidden"
        } absolute top-0 left-0 px-2 py-1 rounded-tl-[6px] rounded-br-[6px] bg-[#0000000D] text-xs text-main font-medium`}
      >
        {text}
      </p>

      <div className="flex flex-col p-3 gap-1">
        <p className="text-main">{title}</p>
        <p className="text-main text-xl font-medium">{subtitle}</p>

        <div
          className={`${
            type === "meditation" ? "flex" : "hidden"
          } items-center gap-2`}
        >
          {icons.map((item, index) => (
            <img src={item} alt="icon" className="w-6 h-6" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const icons: string[] = [
  "/assets/images/card/icon.png",
  "/assets/images/card/icon2.png",
  "/assets/images/card/icon3.png",
];

interface Cardprops {
  type?: "meditation";
  className?: string;
  image: string;
  text?: string;
  title: string;
  subtitle: string;
}
