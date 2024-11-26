import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { toast } from "sonner";

// Global error handling
window.onerror = (message, source, lineno, colno, error) => {
  console.error('Global Error:', error || message);
  toast.error('An error occurred', {
    description: error?.message || String(message),
  });
};

window.onunhandledrejection = (event) => {
  console.error('Unhandled Rejection:', event.reason);
  toast.error('An error occurred', {
    description: event.reason?.message || 'An unexpected error occurred',
  });
};

createRoot(document.getElementById("root")!).render(<App />);