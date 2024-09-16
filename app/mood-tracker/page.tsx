import HeroSection from "../_components/hero";
import LogYourThoughts from "../_section/_mood-tracker/log-your-thoughts";
import MoodGames from "../_section/_mood-tracker/mood-games";
import RecentThoughts from "../_section/_mood-tracker/recent-thoughts";
import Tracker from "../_section/_mood-tracker/tracker";
import TrackingOption from "../_section/_mood-tracker/tracking-option";
import TriggerIdentification from "../_section/_mood-tracker/trigger-identification";

export default function MoodTracker() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection
        className="h-[288px] bg-[url('/assets/images/mood.png')]"
        title={`Mood Tracker`}
        description={`Log your thoughts and feelings to monitor your mental well-being`}
        button="Start Now"
      />

      <TrackingOption />

      <TriggerIdentification />

      <RecentThoughts />

      <LogYourThoughts />

      <MoodGames />

      <Tracker />
    </main>
  );
}
