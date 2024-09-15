import SectionDescription from "@/app/_components/section-description";
import MeditationCard from "@/app/_components/med-card";

export default function MusicLibrary() {
  return (
    <section className="container flex flex-col gap-[60px] py-[60px]">
      <SectionDescription
        type="image"
        image="/assets/images/med-card/music-lib.png"
        title="Music Library"
        subtitle="Explore our music collection for meditation, relaxation, and focus."
        button=""
      />

      <div className="w-full flex items-center justify-between">
        {card.map((item, index) => (
          <MeditationCard
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </section>
  );
}

const card: Card[] = [
  {
    image: "/assets/images/med-card/3.png",
    title: "Meditation Music",
    subtitle: "Soothing tracks for relaxation",
  },
  {
    image: "/assets/images/med-card/4.png",
    title: "Relaxing Sounds",
    subtitle: "Nature sounds to calm your mind",
  },
  {
    image: "/assets/images/med-card/5.png",
    title: "Focus Beats",
    subtitle: "Music to help you concentrate",
  },
];

interface Card {
  image: string;
  title: string;
  subtitle: string;
}
