import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true, // Ensures React Fast Refresh is enabled
    }),
    tailwindcss(),
  ],
  server: {
    port: 8000,
    hmr: {
      overlay: false, // Disables error overlay if needed
    },
    watch: {
      usePolling: true,
    },
  },
});
