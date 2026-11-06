import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Source files use JSX in .js files (carried over from Create React App).
export default defineConfig({
  plugins: [react({ include: /\.(js|jsx)$/ })],
  esbuild: { loader: "jsx", include: /src\/.*\.jsx?$/, exclude: [] },
  optimizeDeps: { esbuildOptions: { loader: { ".js": "jsx" } } },
  build: { outDir: "build" },
});
