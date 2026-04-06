import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Survey from "./pages/Survey";
import Community from "./pages/Community";
import CommunityCategory from "./pages/CommunityCategory";
import PostDetail from "./pages/PostDetail";
import Disabilities from "./pages/Disabilities";
import Blindness from "./pages/disabilities/Blindness";
import Deafness from "./pages/disabilities/Deafness";
import Dyslexia from "./pages/disabilities/Dyslexia";
import SpeechDisability from "./pages/disabilities/SpeechDisability";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/:slug" element={<CommunityCategory />} />
            <Route path="/community/post/:postId" element={<PostDetail />} />
            <Route path="/disabilities" element={<Disabilities />} />
            <Route path="/disabilities/blindness" element={<Blindness />} />
            <Route path="/disabilities/deafness" element={<Deafness />} />
            <Route path="/disabilities/dyslexia" element={<Dyslexia />} />
            <Route path="/disabilities/speech-disability" element={<SpeechDisability />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;