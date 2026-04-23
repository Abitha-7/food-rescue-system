import { Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";

export default function Login() {
  const [, setLocation] = useLocation();

  const handleLogin = (data: any) => {
    console.log("Login data:", data);
    // TODO: Remove mock functionality - Replace with actual API call and role checking
    // Mock: Navigate to donor dashboard for demo
    setLocation("/donor-dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h1 className="font-display text-3xl font-bold md:text-4xl">Welcome Back</h1>
            <p className="mt-2 text-muted-foreground">Login to your FoodResq account</p>
          </div>

          <AuthForm type="login" onSubmit={handleLogin} />

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:underline" data-testid="link-signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
