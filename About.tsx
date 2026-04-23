import Navbar from "@/components/Navbar";
import { Heart, Users, Leaf, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="font-display text-4xl font-bold md:text-5xl">About FoodResq</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Connecting communities to reduce food waste and feed those in need
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                FoodResq is dedicated to reducing food waste by connecting food donors with receivers in local communities. 
                We believe that no food should go to waste when there are people in need. Our platform makes it easy for 
                individuals, restaurants, and organizations to share surplus food with those who need it most.
              </p>
            </section>

            <section>
              <h2 className="mb-6 font-display text-2xl font-bold">Our Vision</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Zero Food Waste</h3>
                    <p className="text-sm text-muted-foreground">
                      Create a world where no edible food ends up in landfills
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Strong Communities</h3>
                    <p className="text-sm text-muted-foreground">
                      Build connections through food sharing and mutual support
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Sustainable Future</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduce environmental impact through conscious food management
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Food Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensure everyone has access to nutritious food
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">How We Make a Difference</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Connect surplus food with those who need it through our easy-to-use platform</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Track and celebrate the impact of every donation with milestone rewards</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Build trust through our rating and review system</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Make food rescue accessible to everyone in the community</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
