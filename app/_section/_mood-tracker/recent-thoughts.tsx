import SectionDescription from "@/app/_components/section-description";
import ListContainer from "@/app/_components/list-container";
import Image from "next/image";

export default function RecentThoughts() {
  return (
    <section className="container grid grid-cols-2 py-[60px] gap-[60px]">
      <div className="flex flex-col gap-[60px]">
        <SectionDescription
          type="no-image"
          title="Recent Thoughts"
          subtitle="Track and reflect on your emotions"
          button="Add New"
        />

        <div className="flex flex-col gap-5">
          {lists.map((item, index) => (
            <ListContainer
              key={index}
              type={item.type}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>

      <Image
        src={`/assets/images/mood/th3.png`}
        alt="illustration"
        height={428}
        width={590}
      />
    </section>
  );
}

const lists: ListProps[] = [
  {
    type: "mood-page",
    image: "/assets/images/mood/th1.png",
    title: "Feeling Anxious",
    subtitle: "Triggered by work deadlines",
  },
  {
    type: "mood-page",
    image: "/assets/images/mood/th2.png",
    title: "Overwhelmed",
    subtitle: "Due to personal commitments",
  },
];

interface ListProps {
  type: "mood-page";
  image: string;
  title: string;
  subtitle: string;
}
