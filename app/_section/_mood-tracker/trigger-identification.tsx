import SectionDescription from "@/app/_components/section-description";
import MeditationCard from "@/app/_components/med-card";

export default function TriggerIdentification() {
  return (
    <section className="w-full flex flex-col items-center py-[60px] border-y border-[#0000000d]">
      <div className="container grid grid-cols-2 gap-[60px]">
        <SectionDescription
          type="no-image"
          title="Trigger Identification"
          subtitle="Identify patterns and triggers for your mood swings"
          button=""
        />

        <div className="w-full grid grid-cols-2 gap-10">
          {card.map((item, index) => (
            <MeditationCard
              key={index}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const card: Card[] = [
  {
    image: "/assets/images/mood/trig1.png",
    title: "Significant Events",
    subtitle: "Track events that affect your mood",
  },
  {
    image: "/assets/images/mood/trig2.png",
    title: "Triggers",
    subtitle: "Identify triggers that impact your emotions",
  },
];

interface Card {
  image: string;
  title: string;
  subtitle: string;
}
