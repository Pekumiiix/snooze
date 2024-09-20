import SectionDescription from "@/app/_components/section-description";
import FeaturedCard from "@/app/_components/recommended-card";

export default function RecommendSection() {
  return (
    <section className="container flex flex-col gap-[60px] py-[60px] items-start xl:px-[50px] 2xl:px-0">
      <SectionDescription
        type="no-image"
        title="Recommended Meditation"
        subtitle="Find peace within yourself"
        button=""
      />

      <div className="grid grid-cols-3 gap-10">
        {card.map((item, index) => (
          <FeaturedCard
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            tag={item.tags}
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
}

const card: CardProps[] = [
  {
    image: "/assets/images/rec/rec1.png",
    title: "Stress Relief Meditation",
    subtitle: "10 mins",
    description:
      "Take a deep breath and relax your mind with this guided meditation session.",
    tags: ["Anxiety", "Stress Relief"],
    name: "Therapist Name",
  },
  {
    image: "/assets/images/rec/rec2.png",
    title: "Morning Meditation",
    subtitle: "15 mins",
    description:
      "Start your day with positivity and clarity of mind. Energize your soul.",
    tags: ["Focus", "Energy Boost"],
    name: "Yoga Instructor",
  },
  {
    image: "/assets/images/rec/rec3.png",
    title: "Sleep Meditation",
    subtitle: "20 mins",
    description:
      "Let go of the day's worries and drift into peaceful sleep with this calming session.",
    tags: ["Sleep Aid", "Relaxation"],
    name: "Meditation Expert",
  },
];

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  name: string;
}
