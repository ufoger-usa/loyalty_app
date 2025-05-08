import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/loyalty_app/', // Set base path for GitHub Pages
  build: {
    outDir: 'docs', // Change output directory to 'docs'
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) {
              return 'vendor_firebase';
            }
            if (id.includes('react-dom')) {
              return 'vendor_react-dom';
            }
            // You could add more rules here for other large libraries
            // For example, qrcode.react if it's still part of a large chunk
            // if (id.includes('qrcode.react')) {
            //   return 'vendor_qrcode';
            // }
            // All other node_modules will fall into a default vendor chunk
            return 'vendor'; 
          }
        }
      }
    },
    chunkSizeWarningLimit: 600 // Optional: Slightly increase limit if needed after chunking
  }
})
