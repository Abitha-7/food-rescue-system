import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, Award, Flame, Trophy, Star, Target, Gift } from "lucide-react";
import MilestoneCard from "@/components/MilestoneCard";

export default function Milestones() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r bg-card">
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold">FoodResq</span>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <header className="flex h-16 items-center gap-4 border-b px-6">
          <Link href="/donor-dashboard">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-display text-2xl font-bold">Milestones & Achievements</h1>
        </header>
        <div className="p-6">
          <div className="mb-8 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 p-6 text-center">
            <h2 className="mb-2 font-display text-2xl font-bold">Keep Going! 🌟</h2>
            <p className="text-muted-foreground">
              You're making a real difference in your community. Every donation counts!
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MilestoneCard
              icon={Award}
              title="First Donation"
              description="Complete your first food donation"
              achieved={true}
            />
            <MilestoneCard
              icon={Flame}
              title="7-Day Streak"
              description="Donate food for 7 consecutive days"
              achieved={false}
              progress={57}
            />
            <MilestoneCard
              icon={Trophy}
              title="100kg Saved"
              description="Save 100kg of food from waste"
              achieved={true}
            />
            <MilestoneCard
              icon={Star}
              title="Community Hero"
              description="Help 50 different receivers"
              achieved={false}
              progress={32}
            />
            <MilestoneCard
              icon={Target}
              title="Monthly Champion"
              description="Complete 30 donations in one month"
              achieved={false}
              progress={73}
            />
            <MilestoneCard
              icon={Gift}
              title="Generous Giver"
              description="Donate 500kg of food total"
              achieved={false}
              progress={12}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
