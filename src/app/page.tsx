import HeroSection from "@/components/landing/hero/HeroSection";
import EthosSection from "@/components/landing/ethos/EthosSection";
import FeaturesSection from "@/components/landing/features/FeaturesSection";
import ClientsSection from "@/components/landing/clients/ClientsSection";
import GallerySection from "@/components/landing/gallery/GallerySection";
import BottomRail from "@/components/common/BottomRail";

export default function Home() {
  return (
    <div className="lofi-page bg-[var(--lofi-bg)] text-[var(--lofi-ink)]">
      <HeroSection />
      <EthosSection />
      <FeaturesSection />
      <ClientsSection />
      <GallerySection />
      <BottomRail />
    </div>
  );
}
