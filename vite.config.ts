import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-landing/", // Update this to match your repository name
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
