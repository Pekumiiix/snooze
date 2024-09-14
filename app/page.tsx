import Image from "next/image";
import HeroSection from "./_components/hero";
import VideoSection from "./_section/_home/video-section";
import ProductSection from "./_section/_home/product-section";
import ReviewsSection from "./_section/_home/reviews";
import JoinSection from "./_section/_home/join-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />

      <VideoSection />

      <ProductSection />

      <ReviewsSection />

      <JoinSection />
    </main>
  );
}
