import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Opening from "./pages/Opening";
import Index from "./pages/Index";
import NotificationPage from "./pages/Notification";
import RoomPage from "./pages/Room";
import StorePage from "./pages/Store";
import ListPage from "./pages/List";
import SingPage from "./pages/Sing";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/opening" element={<Opening />} />
          <Route path="/" element={<Index />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/sing" element={<SingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Navigate to="/opening" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;