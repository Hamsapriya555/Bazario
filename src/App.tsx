import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import StartSelling from "./pages/StartSelling";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Bazar from "./pages/Bazar";
import NotFound from "./pages/NotFound";
import ListProduct from "@/bazar/list-product";
import Apply from "@/bazar/apply";
import Onboard from "@/bazar/onboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
         {/* Navigation Bar */}
          <nav style={{ padding: "1rem", borderBottom: "1px solid #eee", marginBottom: "1rem" }}>
            <Link to="/" style={{ marginRight: 16 }}>Home</Link>
            <Link to="/bazar/list-product" style={{ marginRight: 16 }}>List Product</Link>
            <Link to="/bazar/apply" style={{ marginRight: 16 }}>Apply</Link>
            <Link to="/bazar/onboard" style={{ marginRight: 16 }}>Onboard</Link>
          </nav>
          <Routes>
  {/* Public Pages */}
  <Route path="/" element={<Index />} />
  <Route path="/how-it-works" element={<HowItWorks />} />
  <Route path="/start-selling" element={<StartSelling />} />
  <Route path="/auth" element={<Auth />} />
  <Route path="/dashboard" element={<Dashboard />} />

  {/* Bazar with nested routes */}
  <Route path="/bazar" element={<Bazar />}>
    <Route path="list-product" element={<ListProduct />} />
    <Route path="apply" element={<Apply />} />
    <Route path="onboard" element={<Onboard />} />
  </Route>

  {/* Catch-All */}
  <Route path="*" element={<NotFound />} />
</Routes>

        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
