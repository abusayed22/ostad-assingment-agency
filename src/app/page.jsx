import AllProjects from "@/components/AllProjects";
import FeatureProject from "@/components/FeatureProject";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Work />
      <Stats />
      <div className="w-full h-[300px] bg-slate-100"></div>
      <FeatureProject />
    </div>
  );
}
