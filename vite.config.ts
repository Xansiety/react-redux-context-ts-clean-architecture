import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as Path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: Path.resolve(__dirname, "src"),
      },
    ],
  },
});
