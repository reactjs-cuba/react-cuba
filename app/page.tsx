import { FadeIn } from "@/lib/core/components/FadeIn";
import { AboutUsScetion } from "@/lib/landing/components/About-Us";
import { CubanCompaniesSection } from "@/lib/landing/components/CubanCompanies";
import { EventScetion } from "@/lib/landing/components/Events";
import { FooterScetion } from "@/lib/landing/components/Footer";
import { HeroScetion } from "@/lib/landing/components/Hero";
import { CommunityProjectsSection } from "@/lib/landing/components/ProjectCommunity";
import { SponsorsScetion } from "@/lib/landing/components/Sponsors";

export default function Home() {
  return (
    <div className="w-full">
 
      <HeroScetion />
       <FadeIn><AboutUsScetion /></FadeIn>
      <FadeIn><CubanCompaniesSection /></FadeIn>
      <FadeIn><CommunityProjectsSection /></FadeIn>
      <FadeIn><EventScetion /></FadeIn>
      {/* <FadeIn><SponsorsScetion /></FadeIn> */}
      <FooterScetion />
    </div>
  );
}
