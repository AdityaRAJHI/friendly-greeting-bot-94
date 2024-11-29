import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { RequireAuth } from "@/middleware/auth";
import Opening from "./pages/Opening";
import Index from "./pages/Index";
import NotificationPage from "./pages/Notification";
import RoomPage from "./pages/Room";
import StorePage from "./pages/Store";
import ListPage from "./pages/List";
import SingPage from "./pages/Sing";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";

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
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Index />
                </RequireAuth>
              }
            />
            <Route
              path="/notification"
              element={
                <RequireAuth>
                  <NotificationPage />
                </RequireAuth>
              }
            />
            <Route
              path="/room"
              element={
                <RequireAuth>
                  <RoomPage />
                </RequireAuth>
              }
            />
            <Route
              path="/store"
              element={
                <RequireAuth>
                  <StorePage />
                </RequireAuth>
              }
            />
            <Route
              path="/list"
              element={
                <RequireAuth>
                  <ListPage />
                </RequireAuth>
              }
            />
            <Route
              path="/sing"
              element={
                <RequireAuth>
                  <SingPage />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="/chat"
              element={
                <RequireAuth>
                  <Chat />
                </RequireAuth>
              }
            />
            <Route path="*" element={<Navigate to="/opening" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;