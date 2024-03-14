import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    port: 3000
  },
  dynamicImport: {
    // Set a limit to the size of the chunk to be loaded dynamically.
    // The default is 2.5KB, which is usually a good balance between size and number of requests.
    // Here we're increasing it to 10KB, but you can adjust it to your needs.
    chunkSize: 10000
  }
});
