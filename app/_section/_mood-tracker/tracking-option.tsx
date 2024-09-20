import SectionDescription from "@/app/_components/section-description";
import ListContainer from "@/app/_components/list-container";

export default function TrackingOption() {
  return (
    <section className="container grid grid-cols-2 py-[60px] gap-[60px] xl:px-[50px] 2xl:px-0">
      <SectionDescription
        type="no-image"
        title="Mood Tracking Options"
        subtitle="Choose how you want to track your mood"
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
    </section>
  );
}

const lists: ListProps[] = [
  {
    image: "/assets/images/mood/opt1.png",
    title: "Emoji Mood Tracker",
    subtitle: "Select an emoji that represents your current mood.",
  },
  {
    image: "/assets/images/mood/opt2.png",
    title: "Slider Scale",
    subtitle: "Slide the scale to rate your mood from 1 to 10.",
  },
  {
    image: "/assets/images/mood/opt3.png",
    title: "Journaling",
    subtitle: "Write freely about your thoughts and feelings.",
  },
];

interface ListProps {
  image: string;
  title: string;
  subtitle: string;
}
