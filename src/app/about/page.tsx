import IntroSection from "@/components/about-us/IntroSection";
import OurStory from "@/components/about-us/OurStory";
import OurValueSection from "@/components/about-us/OurValueSection";
import OurTeamSection from "@/components/about-us/OurTeamSection";
import LifeAtSection from "@/components/about-us/LifeAtSection";

export default function AboutPage() {
  return (
    <div className="lofi-page bg-[#faf7f2] px-[calc(100%/12)] pb-[160px] py-32">
      <IntroSection />
      <OurStory />
      <OurValueSection />
      <OurTeamSection />
      <LifeAtSection />
    </div>
  );
}
