import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import middlewareManager from "./middleware/middlewareManager";
import Opening from "./pages/Opening";
import Index from "./pages/Index";
import NotificationPage from "./pages/Notification";
import RoomPage from "./pages/Room";
import StorePage from "./pages/Store";
import ListPage from "./pages/List";
import SingPage from "./pages/Sing";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      meta: {
        onError: (error: Error) => {
          middlewareManager.error.handleError(error);
        },
      },
    },
    mutations: {
      meta: {
        onError: (error: Error) => {
          middlewareManager.error.handleError(error);
        },
      },
    },
  },
});

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    middlewareManager.logger('Checking authentication');
    middlewareManager.auth.checkAuth(navigate);
  }, [navigate]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/opening" element={<Opening />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notification"
            element={
              <ProtectedRoute>
                <NotificationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/room"
            element={
              <ProtectedRoute>
                <RoomPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/store"
            element={
              <ProtectedRoute>
                <StorePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/list"
            element={
              <ProtectedRoute>
                <ListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sing"
            element={
              <ProtectedRoute>
                <SingPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/opening" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;