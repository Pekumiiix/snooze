export default function FeaturedCard({
  type,
  image,
  title,
  subtitle,
  description,
  tag,
  name,
}: CardProps) {
  return (
    <>
      <div className="flex p-4 rounded-[6px] border border-[#0000001A] gap-4">
        <img src={image} alt="User Profile" className="w-[100px] h-[100px]" />

        <div className="flex flex-col gap-2">
          <p className="text-main text-xl font-medium">{title}</p>
          <p className="text-sm text-[#00000080]">{subtitle}</p>
          <p className="text-main">{description}</p>
          <div
            className={
              type === "feat.music" ? "hidden" : "flex items-center gap-2.5"
            }
          >
            {tag &&
              tag.map((tag, index) => (
                <p
                  className="px-1 py-0.5 bg-[#D9D9D980] border border-[#0000001A] rounded-[2px] text-xs text-main"
                  key={index}
                >
                  {tag}
                </p>
              ))}
          </div>
          <div
            className={
              type === "feat.music" ? "hidden" : "flex items-center gap-2"
            }
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#0000001A]" />
              <p className="text-sm font-medium text-main">{name}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={`/assets/images/card/icon.png`}
                alt="icons"
                className="w-6 h-6"
              />
              <img
                src={`/assets/images/rec/ic2.png`}
                alt="icons"
                className="w-6 h-6"
              />
              <img
                src={`/assets/images/rec/ic3.png`}
                alt="icons"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface CardProps {
  type?: "feat.music";
  image: string;
  title: string;
  subtitle: string;
  description: string;
  tag?: string[];
  name?: string;
}
