import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import DonorDashboard from "@/pages/DonorDashboard";
import ReceiverDashboard from "@/pages/ReceiverDashboard";
import Donate from "@/pages/Donate";
import FoodListing from "@/pages/FoodListing";
import BrowseFood from "@/pages/BrowseFood";
import Tracking from "@/pages/Tracking";
import Milestones from "@/pages/Milestones";
import Ratings from "@/pages/Ratings";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/donor-dashboard" component={DonorDashboard} />
      <Route path="/receiver-dashboard" component={ReceiverDashboard} />
      <Route path="/donate" component={Donate} />
      <Route path="/food-listing" component={FoodListing} />
      <Route path="/browse-food" component={BrowseFood} />
      <Route path="/tracking" component={Tracking} />
      <Route path="/milestones" component={Milestones} />
      <Route path="/ratings" component={Ratings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
