import ButtonComponent from "@/app/_components/button";
import Image from "next/image";

export default function ReviewsSection() {
  return (
    <section className="w-full py-10 border-y border-[#0000001A] flex justify-center">
      <div className="container gap-[60px] grid grid-cols-2">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[40px] leading-[48px] text-main font-bold">
                Client Testimonials
              </p>
              <p className="text-main">See what our clients have to say.</p>
            </div>

            <ButtonComponent text="Read More" />
          </div>

          <div className="py-5 grid grid-cols-2 gap-10">
            <Cards />
          </div>
        </div>

        <div className="w-full flex justify-end">
          <img
            src="/assets/images/reviews/illus.png"
            alt="Illustration"
            className="w-[590px] h-[460px]"
          />
        </div>
      </div>
    </section>
  );
}

function Cards() {
  return (
    <>
      {reviews.map((item, index: number) => (
        <div
          className="flex flex-col gap-4 p-4 rounded-[6px] bg-[#0000000D]"
          key={index}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={item.image}
                alt={item.name}
                width={32}
                height={32}
                className="rounded-full"
              />

              <p className="text-sm text-main">{item.name}</p>
            </div>

            <img
              src={`/assets/images/reviews/star.png`}
              alt="Ratings"
              className="w-auto h-2.5"
            />
          </div>

          <p className="text-main">{item.comment}</p>
        </div>
      ))}
    </>
  );
}

const reviews: Reviews[] = [
  {
    image: "/assets/images/reviews/1.png",
    name: "Sarah Smith",
    comment: "Amazing app for meditation practices.",
  },
  {
    image: "/assets/images/reviews/2.png",
    name: "David Johnson",
    comment: "Helped me reduce stress and boost focus.",
  },
];

interface Reviews {
  image: string;
  name: string;
  comment: string;
}
