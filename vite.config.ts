import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Missing import
import tailwindcss from 'tailwindcss'; // Missing import

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Fixed path syntax
    },
  },
});
