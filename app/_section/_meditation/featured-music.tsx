import FeaturedCard from "@/app/_components/recommended-card";

export default function FeaturedMusic() {
  return (
    <section className="container flex flex-col items-center py-[60px] gap-[60px] xl:px-[50px] 2xl:px-0">
      <div className="flex flex-col items-center">
        <p className="text-main text-[40px] leading-[48px] font-bold">
          Featured Music
        </p>
        <p className="text-main">
          Check out our top picks to enhance your meditation experience.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {card.map((item, index) => (
          <FeaturedCard
            key={index}
            type={item.type}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

const card: CardProps[] = [
  {
    type: "feat.music",
    image: "/assets/images/featured-playlist/1.png",
    title: "Tranquil Serenity",
    subtitle: "Artist: Zen Harmony",
    description: "Experience inner calm with this serene instrumental piece.",
  },
  {
    type: "feat.music",
    image: "/assets/images/featured-playlist/2.png",
    title: "Ocean Breeze",
    subtitle: "Artist: Water Sounds",
    description:
      "Let the calming sound of ocean waves lull you into relaxation.",
  },
  {
    type: "feat.music",
    image: "/assets/images/featured-playlist/3.png",
    title: "Mountain Melody",
    subtitle: "Artist: Summit Symphony",
    description:
      "Feel rejuvenated as you listen to this mountain-inspired composition.",
  },
];

interface CardProps {
  type: "feat.music";
  image: string;
  title: string;
  subtitle: string;
  description: string;
}
