import { useState } from "react";
import { Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import RoleCard from "@/components/RoleCard";
import AuthForm from "@/components/AuthForm";
import { HandHeart, Users } from "lucide-react";

export default function Signup() {
  const [, setLocation] = useLocation();
  const [selectedRole, setSelectedRole] = useState<"donor" | "receiver" | "">("");

  const handleSignup = (data: any) => {
    console.log("Signup data:", { ...data, role: selectedRole });
    // TODO: Remove mock functionality - Replace with actual API call
    if (selectedRole === "donor") {
      setLocation("/donor-dashboard");
    } else if (selectedRole === "receiver") {
      setLocation("/receiver-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="font-display text-3xl font-bold md:text-4xl">Create Your Account</h1>
            <p className="mt-2 text-muted-foreground">Join FoodResq and start making a difference</p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-center font-display text-xl font-semibold">Choose Your Role</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <RoleCard
                icon={HandHeart}
                title="Donor"
                description="Share surplus food and help reduce waste in your community"
                selected={selectedRole === "donor"}
                onClick={() => setSelectedRole("donor")}
              />
              <RoleCard
                icon={Users}
                title="Receiver"
                description="Find and receive donated food to support your needs"
                selected={selectedRole === "receiver"}
                onClick={() => setSelectedRole("receiver")}
              />
            </div>
          </div>

          {selectedRole && (
            <div className="mx-auto max-w-md">
              <AuthForm type="signup" onSubmit={handleSignup} />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-primary hover:underline" data-testid="link-login">
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
