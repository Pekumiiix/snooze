import SectionDescription from "@/app/_components/section-description";
import CostumizationForm from "@/app/_components/customization-form";

export default function CustomizationOptions() {
  return (
    <section className="container flex items-center py-[60px] gap-[60px]">
      <SectionDescription
        type="no-image"
        title="Customization Options"
        subtitle="Personalize your breathing exercises"
        button=""
      />

      <CostumizationForm />
    </section>
  );
}
