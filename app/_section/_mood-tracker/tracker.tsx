import SectionDescription from "@/app/_components/section-description";
import Image from "next/image";

export default function Tracker() {
  return (
    <section className="w-full flex flex-col items-center py-[60px] border-t border-[#0000000d]">
      <div className="container flex flex-col gap-[60px]">
        <SectionDescription
          type="image"
          image="/assets/images/just-b/just-b.png"
          title="Mood Tracker"
          subtitle="Monitor your emotional well-beign."
          button="Start Now"
        />

        <div className="w-full flex flex-col gap-3 border border-[#0000001A] rounded-[6px] p-5">
          <div className="flex flex-col">
            <p className="text-main text-xl fort-medium">Mood Trends</p>
            <p className="text-[#00000080]">Emotional State</p>
          </div>

          <Image
            src={`/assets/images/mood/graph.png`}
            alt="demo-graph"
            width={1200}
            height={288}
          />
        </div>

        <div className="grid grid-cols-2 gap-10">
          {card.map((item, index) => (
            <MoodCard
              key={index}
              name={item.name}
              level={item.level}
              increment={item.increment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MoodCard({ name, level, increment }: CardProps) {
  return (
    <div className="flex flex-col p-4 rounded-[6px] border border-[#0000001A] gap-2">
      <p className="text-[#00000080]">{name}</p>
      <p className="text-main font-medium text-[28px] leading-9">{level}</p>
      <p className="text-main">{increment}</p>
    </div>
  );
}

const card: CardProps[] = [
  { name: "Happiness", level: "75%", increment: "+5%" },
  { name: "Stress Level", level: "30%", increment: "-10%" },
];

interface CardProps {
  name: string;
  level: string;
  increment: string;
}
