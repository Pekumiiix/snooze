import ListContainer from "@/app/_components/list-container";
import Image from "next/image";
import SectionDescription from "@/app/_components/section-description";

export default function MeditationContent() {
  return (
    <section className="container w-full py-[60px] flex gap-[60px] justify-center">
      <div className="w-[590px] flex flex-col gap-[60px]">
        <SectionDescription
          type="no-image"
          image=""
          title="Meditation Room"
          subtitle="Immerse yourself in calming audio and images."
          button="Explore"
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

      <div className="h-full w-[590px]">
        <Image
          src={`/assets/images/med-list/content.png`}
          alt="Meditation"
          width={590}
          height={600}
        />
      </div>
    </section>
  );
}

const lists: ListProps[] = [
  {
    image: "/assets/images/med-list/1.png",
    title: "Audio Player",
    subtitle: "Listen to soothing meditation tracks.",
  },
  {
    image: "/assets/images/med-list/1-1.png",
    title: "Calming Image",
    subtitle: "Listen to soothing meditation tracks.",
  },
  {
    image: "/assets/images/med-list/1-2.png",
    title: "Progress Bar",
    subtitle: "Listen to soothing meditation tracks.",
  },
];

interface ListProps {
  image: string;
  title: string;
  subtitle: string;
}
