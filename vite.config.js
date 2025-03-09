// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                contact: resolve(__dirname, "/pages/contact.html"),
                services: resolve(__dirname, "/pages/services.html"),
                about: resolve(__dirname, "/pages/about.html"),
                error: resolve(__dirname, "/pages/404.html"),
                project: resolve(__dirname, "/pages/project.html"),
                privacy: resolve(__dirname, "/pages/privacy.html"),
            },
        },
    },
});
