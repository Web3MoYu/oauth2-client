import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:'192.168.1.114',
    port: 8080,
    proxy: {
      '/api': {
        // 目标地址一般为服务器地址
        target: 'http://localhost:8088/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
