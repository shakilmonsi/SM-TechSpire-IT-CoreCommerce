import FixWhatSlowSection from "@/components/fixWhat-slow-section";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/howIt-works-section/page";
import HeroConnectedSection from "@/components/jero-connected-section/page";
import TemporaryWorksFeatureDuo from "@/components/temporary-works-featureDuo/page";

export default function Home() {
  return (
    <div>
      <HeroConnectedSection description={"Manage your sites, coordinate teams, and keep every task on track. Your all-in-one solution for seamless construction Project management."} image={"/images/hero.png"} title={"Connected Teams Coordinated Projects"} />
    
      <TemporaryWorksFeatureDuo />
      {/* <FixWhatSlowSection />
      <HowItWorksSection /> */}
    </div>
  );
}
