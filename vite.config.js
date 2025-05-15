import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    assetsInclude: ['**/*.JPEG'],
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      },
      // Try to use port 5147 but allow fallback to other ports
      port: 5147,
      strictPort: false,
      cors: true, // Enable CORS for all requests
    },
  };

  // Use different base paths for development and production
  if (command === 'serve') {
    // Development mode - use root path
    config.base = '/';
  } else {
    // Production mode - use root path for custom domain
    // When using a custom domain, the base path should be '/'
    config.base = '/';
  }

  return config;
});
