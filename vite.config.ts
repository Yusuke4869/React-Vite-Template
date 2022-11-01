import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

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
