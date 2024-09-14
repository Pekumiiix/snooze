import Card from "@/app/_components/card";
import Image from "next/image";

export default function ProductSection() {
  return (
    <section className="container flex flex-col py-10 gap-[60px]">
      <div className="flex items-center gap-[60px]">
        <Image
          src={`/assets/images/key-features/kf.png`}
          alt="Key features"
          width={180}
          height={180}
          className="rounded-[8px]"
        />
        <p className="text-main text-[40px] leading-[48px] font-bold">
          Key Features
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {keyFeatures.slice(0, 3).map((item, index: number) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}

        <Card
          className="col-span-3"
          image={keyFeatures[3].image}
          title={keyFeatures[3].title}
          subtitle={keyFeatures[3].subtitle}
        />
      </div>
    </section>
  );
}

const keyFeatures = [
  {
    image: "/assets/images/key-features/1.png",
    title: "Meditation",
    subtitle: "Practice mindfulness",
  },
  {
    image: "/assets/images/key-features/2.png",
    title: "Breathing Exercise",
    subtitle: "Relax with deep breaths",
  },
  {
    image: "/assets/images/key-features/3.png",
    title: "Mood Tracking",
    subtitle: "Track your emotional journey",
  },
  {
    image: "/assets/images/key-features/4.png",
    title: "Music",
    subtitle: "Listen to soothing sounds",
  },
];
