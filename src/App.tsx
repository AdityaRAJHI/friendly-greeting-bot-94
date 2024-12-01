import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { RequireAuth } from "@/middleware/auth";
import {
  Opening,
  Index,
  Notification,
  Room,
  Store,
  List,
  Sing,
  Profile,
  Chat,
  LiveDuet,
  PlayLudo,
  PlayBilliards,
  PlayGame
} from "@/pages";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/opening" element={<Opening />} />
            <Route path="/" element={<RequireAuth><Index /></RequireAuth>} />
            <Route path="/notification" element={<RequireAuth><Notification /></RequireAuth>} />
            <Route path="/room" element={<RequireAuth><Room /></RequireAuth>} />
            <Route path="/store" element={<RequireAuth><Store /></RequireAuth>} />
            <Route path="/list" element={<RequireAuth><List /></RequireAuth>} />
            <Route path="/sing" element={<RequireAuth><Sing /></RequireAuth>} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/chat" element={<RequireAuth><Chat /></RequireAuth>} />
            <Route path="/live-duet" element={<RequireAuth><LiveDuet /></RequireAuth>} />
            <Route path="/play-ludo" element={<RequireAuth><PlayLudo /></RequireAuth>} />
            <Route path="/play-billiards" element={<RequireAuth><PlayBilliards /></RequireAuth>} />
            <Route path="/play-game" element={<RequireAuth><PlayGame /></RequireAuth>} />
            <Route path="*" element={<Navigate to="/opening" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;