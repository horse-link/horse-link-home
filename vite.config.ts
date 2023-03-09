import { defineConfig, loadEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default ({ mode }: UserConfig) => {
  process.env = { ...process.env, ...loadEnv(mode!, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      svgrPlugin({
        svgrOptions: {
          icon: true
        }
      })
    ],
    define: {
      "process.env": process.env
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "assets/[name].js",
          chunkFileNames: "assets/[name].js",
          assetFileNames: "assets/[name].[ext]"
        }
      }
    }
  });
};
