import Card from "@/app/_components/card";
import SectionDescription from "@/app/_components/section-description";

export default function FeaturedSection() {
  return (
    <section className="container flex flex-col items-start py-[60px] gap-[60px]">
      <SectionDescription
        type="image"
        image="/assets/images/featured/fm.png"
        title="Featured Meditations"
        subtitle="Curated meditations for anxiety relief"
        button="Explore More"
      />

      <div className="grid grid-cols-3 gap-10">
        {card.map((item, index) => (
          <Card
            key={index}
            type={item.type}
            image={item.image}
            text={item.text}
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
    type: "meditation",
    image: "/assets/images/featured/1.png",
    text: "Recommended",
    title: "Beach Meditation",
    subtitle: "10 mins",
  },
  {
    type: "meditation",
    image: "/assets/images/featured/2.png",
    title: "Forest Serenity",
    text: "New",
    subtitle: "15 mins",
  },
  {
    type: "meditation",
    image: "/assets/images/featured/3.png",
    title: "Mountain Peace",
    text: "Popular",
    subtitle: "20 mins",
  },
];

interface Card {
  type: "meditation";
  image: string;
  title: string;
  text: string;
  subtitle: string;
}
