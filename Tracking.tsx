import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft } from "lucide-react";
import TrackingCard from "@/components/TrackingCard";

export default function Tracking() {
  // TODO: Remove mock functionality - Replace with actual data from API
  const mockTracking = [
    {
      id: "1",
      title: "Fresh Vegetables to Community Kitchen",
      status: "in-transit" as const,
      steps: [
        { title: "Donation Posted", status: "completed" as const, timestamp: "Nov 10, 2:30 PM" },
        { title: "Request Approved", status: "completed" as const, timestamp: "Nov 10, 3:15 PM" },
        { title: "In Transit", status: "current" as const, timestamp: "Nov 10, 4:00 PM" },
        { title: "Delivered", status: "pending" as const },
      ],
    },
    {
      id: "2",
      title: "Packaged Snacks to Local Family",
      status: "completed" as const,
      steps: [
        { title: "Donation Posted", status: "completed" as const, timestamp: "Nov 9, 10:00 AM" },
        { title: "Request Approved", status: "completed" as const, timestamp: "Nov 9, 11:30 AM" },
        { title: "In Transit", status: "completed" as const, timestamp: "Nov 9, 2:00 PM" },
        { title: "Delivered", status: "completed" as const, timestamp: "Nov 9, 3:45 PM" },
      ],
    },
  ];

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
          <h1 className="font-display text-2xl font-bold">Tracking</h1>
        </header>
        <div className="p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {mockTracking.map((track) => (
              <TrackingCard key={track.id} {...track} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
