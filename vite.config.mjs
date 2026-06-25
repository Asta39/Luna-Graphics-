import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 500,
  },
  plugins: [tsconfigPaths(), react()],
  server: {
    port: 4028,
    host: "127.0.0.1",
    strictPort: true,
  },
});
