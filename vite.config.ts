import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src",
      tsr: {
        routesDirectory: "./src/routes",
        generatedRouteTree: "./src/routeTree.gen.ts",
      },
    }),
    react(),
    nitro(),
  ],
});
