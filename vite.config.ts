import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~/": `${process.cwd()}/src/`,
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
