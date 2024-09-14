import ButtonComponent from "./button";

export default function HeroSection() {
  return (
    <section className="min-w-full max-w-[1440px] px-0 h-[636px] flex flex-col items-center justify-center gap-6 bg-[url('/assets/images/home-hero.png')] bg-cover bg-center ">
      <p className="text-[40px] leading-[48px] max-w-[504px] text-white text-center">
        Reduce Stress and Boost Mood with Snooze
      </p>
      <p className="text-xl text-white">
        Guided meditations and exercises for mental well-being
      </p>

      <ButtonComponent className="bg-accentMain" text="Start your free trial" />
    </section>
  );
}
