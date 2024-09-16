import SectionDescription from "@/app/_components/section-description";
import ListContainer from "@/app/_components/list-container";

export default function BreathingVariety() {
  return (
    <section className="w-full flex flex-col items-center py-[60px] border-y border-[#0000000d]">
      <div className="container grid grid-cols-2 gap-[60px]">
        <SectionDescription
          type="no-image"
          title="Breathing Exercises Variety"
          subtitle="Choose from a range of breathing techniques to suit your needs and preferences"
          button=""
        />

        <div className="flex flex-col gap-10">
          {lists.map((item, index) => (
            <ListContainer
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

const lists: ListProps[] = [
  {
    image: "/assets/images/just-b/var1.png",
    title: "Deep Breathing",
    subtitle:
      "Inhale deeply through your nose, hold for a few seconds, and exhale slowly through your mouth.",
  },
  {
    image: "/assets/images/just-b/var2.png",
    title: "4-7-8 Technique",
    subtitle:
      "Inhale for 4 seconds, hold for 7 seconds, and exhale for 8 seconds. Repeat.",
  },
  {
    image: "/assets/images/just-b/var3.png",
    title: "Box Breathing",
    subtitle:
      "Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds. Repeat.",
  },
];

interface ListProps {
  image: string;
  title: string;
  subtitle: string;
}
