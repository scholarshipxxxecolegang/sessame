import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initSiteTracking } from "./lib/analytics";

initSiteTracking();

createRoot(document.getElementById("root")!).render(<App />);
