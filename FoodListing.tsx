import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft } from "lucide-react";
import FoodCard from "@/components/FoodCard";
import { getAllDonations } from "@/lib/foodStorage";
import { useState, useEffect } from "react";

export default function FoodListing() {
  const [donations, setDonations] = useState(getAllDonations());

  useEffect(() => {
    // Refresh donations when component mounts
    setDonations(getAllDonations());
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

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
          <h1 className="font-display text-2xl font-bold">My Donations</h1>
        </header>
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {donations.map((donation) => (
              <FoodCard 
                key={donation.id} 
                {...donation} 
                expiryDate={formatDate(donation.expiryDate)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
