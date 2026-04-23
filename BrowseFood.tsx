import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, ArrowLeft, Search } from "lucide-react";
import FoodCard from "@/components/FoodCard";
import { getAvailableDonations, updateDonationStatus } from "@/lib/foodStorage";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function BrowseFood() {
  const [availableFood, setAvailableFood] = useState(getAvailableDonations());
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    setAvailableFood(getAvailableDonations());
  }, []);

  const handleRequest = (id: string, title: string) => {
    // TODO: Remove mock functionality - Replace with actual API call
    updateDonationStatus(id, "claimed");
    setAvailableFood(getAvailableDonations());
    toast({
      title: "Request Sent!",
      description: `Your request for "${title}" has been sent to the donor.`,
    });
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const filteredFood = availableFood.filter((food) =>
    food.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <Link href="/receiver-dashboard">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-display text-2xl font-bold">Browse Food</h1>
        </header>
        <div className="p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search food by name, category, or location..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search-food"
              />
            </div>
          </div>
          {filteredFood.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No food donations available at the moment.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredFood.map((food) => (
                <FoodCard
                  key={food.id}
                  {...food}
                  expiryDate={formatDate(food.expiryDate)}
                  onRequest={() => handleRequest(food.id, food.title)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
