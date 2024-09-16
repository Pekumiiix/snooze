import ListContainer from "@/app/_components/list-container";

export default function MoodGames() {
  return (
    <section className="container grid grid-cols-2 py-[60px] gap-[60px]">
      <p className="text-main text-[40px] font-bold leading-[48px]">
        Mood Games
      </p>

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
    </section>
  );
}

const lists: ListProps[] = [
  {
    type: "mood-page",
    image: "/assets/images/mood/game1.png",
    title: "Calm Puzzles",
    subtitle: "Engage your mind",
  },
  {
    type: "mood-page",
    image: "/assets/images/mood/game2.png",
    title: "Nature Escape",
    subtitle: "Relax with tranquil scenes",
  },
];

interface ListProps {
  type: "mood-page";
  image: string;
  title: string;
  subtitle: string;
}
