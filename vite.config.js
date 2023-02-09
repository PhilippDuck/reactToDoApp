import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: 'DuckDo - Aufgabenplaner',
        short_name: 'DuckDo',
        description: 'Ein simpler aber nützlicher Aufgabenplaner.',
        theme_color: '#262626',
        icons: [
          {
            src: '/image/duckdo_192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/image/duckdo_512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/image/duckdo_512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      } 
    })
  ],
})
