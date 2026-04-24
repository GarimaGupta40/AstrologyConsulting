import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Testimonials from "@/pages/testimonials";
import NotFound from "@/pages/not-found";
import { Nav, Footer, FloatingWhatsApp } from "@/pages/home";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services">
        <div className="min-h-screen bg-white text-[#1a1a1a]">
          <Nav />
          <Services />
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Route>
      <Route path="/about">
        <div className="min-h-screen bg-white text-[#1a1a1a]">
          <Nav />
          <About />
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Route>
      <Route path="/contact">
        <div className="min-h-screen bg-white text-[#1a1a1a]">
          <Nav />
          <Contact />
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Route>
      <Route path="/testimonials">
        <div className="min-h-screen bg-white text-[#1a1a1a]">
          <Nav />
          <Testimonials />
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
