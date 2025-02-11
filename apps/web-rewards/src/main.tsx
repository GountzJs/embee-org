import App from "@/app/app.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
