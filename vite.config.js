import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Add visualizer plugin only in analyze mode
  const plugins = [
    react(),
    // Image optimization
    viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 80,
        },
        pngquant: {
          quality: [0.7, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
        webp: {
          quality: 80,
        }
      }),
  ];

  // Add visualizer in analyze mode
  if (mode === 'analyze') {
    plugins.push(
      visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      })
    );
  }

  const config = {
    plugins,
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
    // Fix for GitHub Pages MIME type issues and implement code splitting
    build: {
      rollupOptions: {
        output: {
          // Use .mjs extension for GitHub Pages MIME type compatibility
          entryFileNames: 'assets/[name]-[hash].mjs',
          chunkFileNames: 'assets/[name]-[hash].mjs',

          // Implement code splitting for better performance
          manualChunks: {
            // React and related libraries
            'vendor-react': [
              'react',
              'react-dom',
              'react-router-dom'
            ],
            // Animation and UI libraries
            'vendor-ui': [
              'framer-motion',
              'react-i18next',
              'i18next'
            ],
            // 3D libraries
            'vendor-three': [
              'three',
              '@react-three/drei',
              '@react-three/fiber'
            ]
          }
        }
      },
      // Enable source maps for production (helps with debugging)
      sourcemap: true,
      // Minify the output for smaller file sizes
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.log in production
        }
      }
    }
  };

  // Use different base paths for development and production
  if (command === 'serve') {
    // Development mode - use root path
    config.base = '/';
  } else {
    // Production mode - use relative paths for custom domain
    // Using './' ensures all assets are loaded relative to the HTML file
    config.base = './';
  }

  return config;
});
