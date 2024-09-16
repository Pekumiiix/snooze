import MeditationCard from "@/app/_components/med-card";
import SectionDescription from "@/app/_components/section-description";
import Image from "next/image";

export default function RecentMeditation() {
  return (
    <section className="w-full flex flex-col items-center py-[60px] border-y border-[#0000000d]">
      <div className="container grid grid-cols-2 gap-[60px]x">
        <div className="flex flex-col gap-[60px]">
          <SectionDescription
            type="no-image"
            title="Recent Meditations"
            subtitle="Keep track of your recent meditation sessions."
            button="View All"
          />

          <div className="flex items-center gap-10">
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

        <Image
          src={`/assets/images/med-card/recent-med.png`}
          alt="illustration"
          height={432}
          width={590}
        />
      </div>
    </section>
  );
}

const card: Card[] = [
  {
    image: "/assets/images/med-card/1.png",
    title: "Morning Serenity",
    subtitle: "Completed",
  },
  {
    image: "/assets/images/med-card/2.png",
    title: "Calm Breaths",
    subtitle: "In Progress",
  },
];

interface Card {
  image: string;
  title: string;
  subtitle: string;
}
