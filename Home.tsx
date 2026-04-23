import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionCard from "@/components/MissionCard";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import ContactSection from "@/components/ContactSection";
import { Heart, Users, Leaf } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">Building a sustainable future together</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <MissionCard
              icon={Heart}
              title="Reduce Waste"
              description="Help reduce food waste by connecting surplus food with those who need it most"
            />
            <MissionCard
              icon={Users}
              title="Feed Communities"
              description="Make a real difference by providing nutritious food to individuals and families"
            />
            <MissionCard
              icon={Leaf}
              title="Sustainability"
              description="Contribute to a sustainable future by preventing food from ending up in landfills"
            />
          </div>
        </div>
      </section>
      <HowItWorks />
      <ContactSection />
    </div>
  );
}
