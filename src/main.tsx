import { Suspense, lazy } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const App = lazy(() => import("@/App"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen bg-brand-cream flex items-center justify-center">
            <div className="text-brand-orange font-display font-bold text-2xl">
              Sholly-T Spaghetti
            </div>
          </div>
        }
      >
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
