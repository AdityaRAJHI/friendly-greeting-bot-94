import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import middlewareManager from './middleware/middlewareManager';

// Global error handling
window.onerror = (message, source, lineno, colno, error) => {
  middlewareManager.error.handleError(error || new Error(message as string));
};

window.onunhandledrejection = (event) => {
  middlewareManager.error.handleError(event.reason);
};

createRoot(document.getElementById("root")!).render(<App />);