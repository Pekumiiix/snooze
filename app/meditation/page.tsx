import HeroSection from "../_components/hero";
import MeditationContent from "../_section/_meditation/content";
import FeaturedSection from "../_section/_meditation/featured";
import FeaturedMusic from "../_section/_meditation/featured-music";
import MusicLibrary from "../_section/_meditation/music-libary";
import PersonalizedPlaylist from "../_section/_meditation/personalized-playlist";
import RecentMeditation from "../_section/_meditation/recent-meditation";
import RecommendSection from "../_section/_meditation/recommend-section";

export default function MeditationPage() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection
        className="h-[288px] bg-[url('/assets/images/med-bg.png')]"
        title={`Find Your Calm with Snooze`}
        description={`Improve focus, sleep better, and relax deeply.`}
        button="Upgrade To Premium"
      />

      <MeditationContent />

      <FeaturedSection />

      <RecommendSection />

      <RecentMeditation />

      <MusicLibrary />

      <PersonalizedPlaylist />

      <FeaturedMusic />
    </main>
  );
}
