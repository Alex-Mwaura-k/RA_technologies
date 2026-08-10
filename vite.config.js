import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // Explicitly include your PWA icons so they are definitely cached
      includeAssets: ['icon-192x192.png', 'icon-512x512.png'], 
      
      // --- NEW WORKBOX CONFIGURATION ---
      workbox: {
        // 1. Pre-cache all local assets (images, fonts, styles, scripts)
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,gif,woff,woff2}'],
        
        // 2. Maximum file size to cache (default is 2MB, bumped to 5MB here just in case you have high-res hero images)
        maximumFileSizeToCacheInBytes: 5000000, 
        
        // 3. Optional Runtime Caching for EXTERNAL images 
        // (If you use images hosted on URLs like Unsplash, AWS S3, or an external CMS, uncomment this section)
        /*
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://images.unsplash.com', // Change to your external image source
            handler: 'CacheFirst',
            options: {
              cacheName: 'external-image-cache',
              expiration: {
                maxEntries: 50, // Only cache 50 images to save space
                maxAgeSeconds: 60 * 60 * 24 * 30 // Cache for 30 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
        */
      },
      
      manifest: {
        short_name: "RA tech",
        name: "RA technologies",
        description: "Engineering the Future of Software & Talent.",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        start_url: "/",
        orientation: "portrait",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
});