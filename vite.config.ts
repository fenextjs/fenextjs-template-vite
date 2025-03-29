import preact from "@preact/preset-vite";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from 'vite-plugin-html';
export default ({ mode }: any) => {
  const ENV = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    server: {
      watch: {
        usePolling: true, // Utiliza polling en lugar de observadores.
        interval: 100, // Intervalo de sondeo en milisegundos.
      },
    },
    plugins: [
      preact(),
      createHtmlPlugin({
        inject: {
          data: {
            title: 'Fenextjs',
          },
          tags:[
            {
              tag:"title",
              children:"Fenextjs",
              injectTo:"head-prepend"
            },
            {
              tag:"link",
              attrs:{
                rel:"icon", href:"/favicon.png", sizes:"32x32"
              },
              injectTo:"head-prepend"
            }
          ]
        },
      }),

    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      devSourcemap: false, // Desactiva los mapas de fuente para CSS en desarrollo
    },
    define: {
      "process.env": ENV,
      process: {
        env: ENV,
      },
    },
  });
};
