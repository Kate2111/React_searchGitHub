import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/React_searchGitHub",
  resolve: {
    alias: {
      "@": "/src",
      "@api": "/src/api",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@modules": "/src/modules",
      "@pages": "/src/pages",
      "@router": "/src/router",
      "@store": "/src/store",
      "@type": "/src/type",
    },
  },
});
