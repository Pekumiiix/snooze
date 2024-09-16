import SectionDescription from "@/app/_components/section-description";
import Card from "@/app/_components/card";

export default function BreathingExercise() {
  return (
    <section className="container flex flex-col items-start py-[60px] gap-[60px]">
      <SectionDescription
        type="image"
        image="/assets/images/just-b/just-b.png"
        title="Breathing Exercises"
        subtitle="Practice mindful breathing techniques."
        button="Start Now"
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
    type: "breathe",
    image: "/assets/images/just-b/ex1.png",
    title: "Inhale and Exhale",
    text: "Beginner",
    subtitle: "1 min",
  },
  {
    type: "breathe",
    image: "/assets/images/just-b/ex2.png",
    title: "Box Breathing",
    text: "Intermediate",
    subtitle: "3 mins",
  },
  {
    type: "breathe",
    image: "/assets/images/just-b/ex3.png",
    title: "4-7-8 Technique",
    text: "Advanced",
    subtitle: "5 mins",
  },
];

interface Card {
  type: "breathe";
  image: string;
  title: string;
  text: string;
  subtitle: string;
}
