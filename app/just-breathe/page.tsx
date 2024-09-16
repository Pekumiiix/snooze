import HeroSection from "../_components/hero";
import BreathingExercise from "../_section/_just-breathe/breathing-exercise";
import BreathingVariety from "../_section/_just-breathe/breathing-variety";
import CustomizationOptions from "../_section/_just-breathe/customization-options";

export default function JustBreathe() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection
        className="h-[288px] bg-[url('/assets/images/breathe.png')]"
        title={`Breathe Page`}
        description={`Practice guided breathing exercises to reduce stress and anxiety`}
        button="Start Now"
      />

      <BreathingExercise />

      <BreathingVariety />

      <CustomizationOptions />
    </main>
  );
}
