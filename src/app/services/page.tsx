import Navbar from "@/components/common/Navbar";
import ServicesSection from "@/components/services/ServicesSection";
import OurProductsSection from "@/components/services/OurProductsSection";
import WhyChooseUsSection from "@/components/services/WhyChooseUsSection";
import ProcessSection from "@/components/services/ProcessSection";

export default function ServicesPage() {
  return (
    <div className="lofi-page">
      <Navbar />
      <ServicesSection />
      <OurProductsSection />
      <WhyChooseUsSection />
      <ProcessSection />
    </div>
  );
}
