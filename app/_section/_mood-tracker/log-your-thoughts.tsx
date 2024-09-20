import SectionDescription from "@/app/_components/section-description";
import ThoughtForm from "@/app/_components/thoughts-form";

export default function LogYourThoughts() {
  return (
    <section className="w-full flex flex-col items-center py-[60px] border-y border-[#0000000d]">
      <div className="container grid grid-cols-2 gap-[60px] xl:px-[50px] 2xl:px-0">
        <SectionDescription
          type="no-image"
          title="Log Your Thoughts and Feelings"
          subtitle="Identify patterns and reflect on your state of mind"
          button=""
        />

        <ThoughtForm />
      </div>
    </section>
  );
}
