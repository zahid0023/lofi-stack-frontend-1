import Navbar from "@/components/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import EthosSection from "@/components/ethos/EthosSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import BottomRail from "@/components/BottomRail";

export default function Home() {
  return (
    <div className="lofi-page">
      <Navbar />
      <HeroSection />
      <EthosSection />
      <FeaturesSection />
      <BottomRail />
    </div>
  );
}
