import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft } from "lucide-react";
import DonateForm from "@/components/DonateForm";

export default function Donate() {
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
          <h1 className="font-display text-2xl font-bold">Donate Food</h1>
        </header>
        <div className="p-6">
          <div className="mx-auto max-w-2xl">
            <DonateForm />
          </div>
        </div>
      </main>
    </div>
  );
}
