import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      components: "src/components",
      pages: "src/pages",
      store: "src/store",
      helpers: "src/helpers",
      hooks: "src/hooks",
    },
  },
});
