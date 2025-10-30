import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// set background image CSS variable at runtime so the asset can be inlined from public or processed assets
try {
	const bg = new URL('/backgrounds/dark-bg.png', import.meta.url).href;
	document.documentElement.style.setProperty('--bg-image', `url('${bg}')`);
} catch (e) {
	// ignore if not available; fallback to CSS default
}

createRoot(document.getElementById("root")!).render(<App />);
