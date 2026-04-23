import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, Search, Package, TrendingUp, Star, LogOut } from "lucide-react";

export default function ReceiverDashboard() {
  const [location] = useLocation();

  const navItems = [
    { href: "/receiver-dashboard", label: "Dashboard", icon: TrendingUp },
    { href: "/browse-food", label: "Browse Food", icon: Search },
    { href: "/my-requests", label: "My Requests", icon: Package },
    { href: "/tracking", label: "Tracking", icon: TrendingUp },
    { href: "/ratings", label: "Ratings", icon: Star },
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
        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={location === item.href ? "secondary" : "ghost"}
                className="w-full justify-start gap-3"
                data-testid={`link-${item.label.toLowerCase().replace(" ", "-")}`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start gap-3" data-testid="button-logout">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <header className="flex h-16 items-center justify-between border-b px-6">
          <h1 className="font-display text-2xl font-bold">Receiver Dashboard</h1>
        </header>
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-2 text-sm text-muted-foreground">Food Received</div>
              <div className="font-display text-3xl font-bold text-primary">18</div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-2 text-sm text-muted-foreground">Active Requests</div>
              <div className="font-display text-3xl font-bold text-primary">3</div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="mb-2 text-sm text-muted-foreground">Total Saved</div>
              <div className="font-display text-3xl font-bold text-primary">82kg</div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 font-display text-xl font-semibold">Quick Actions</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/browse-food">
                <Button className="w-full gap-2" size="lg" data-testid="button-quick-browse">
                  <Search className="h-5 w-5" />
                  Browse Available Food
                </Button>
              </Link>
              <Link href="/my-requests">
                <Button variant="outline" className="w-full gap-2" size="lg" data-testid="button-quick-requests">
                  <Package className="h-5 w-5" />
                  View My Requests
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
