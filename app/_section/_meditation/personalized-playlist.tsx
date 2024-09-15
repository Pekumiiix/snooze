import SectionDescription from "@/app/_components/section-description";
import MeditationCard from "@/app/_components/med-card";

export default function PersonalizedPlaylist() {
  return (
    <section className="container flex flex-col gap-[60px] py-[60px]">
      <SectionDescription
        type="image"
        image="/assets/images/med-card/personalized.png"
        title="Personalized Playlists"
        subtitle="Create your own playlists with your favorite tracks."
        button=""
      />

      <div className="w-full flex items-center justify-between">
        {card.map((item, index) => (
          <MeditationCard
            key={index}
            type={item.type}
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
    type: "playlist",
    image: "/assets/images/med-card/6.png",
    title: "My Meditation Mix",
    subtitle: "10 tracks",
  },
  {
    type: "playlist",
    image: "/assets/images/med-card/6.png",
    title: "Chill Vibes",
    subtitle: "8 tracks",
  },
  {
    type: "playlist",
    image: "/assets/images/med-card/6.png",
    title: "Work Focus",
    subtitle: "12 tracks",
  },
];

interface Card {
  type: "playlist";
  image: string;
  title: string;
  subtitle: string;
}
