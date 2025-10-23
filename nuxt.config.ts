// nuxt.config.ts
export default defineNuxtConfig({
  rootDir: '.',             
  srcDir: 'app/', 
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/monitor111.png' },
        { rel: 'apple-touch-icon', href: '/monitor111.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  },
  compatibilityDate: '2025-09-14',
  modules: [
    '@nuxtjs/tailwindcss',

          [
            '@vite-pwa/nuxt',
            {
              strategies: 'generateSW',
              registerType: 'autoUpdate',
              injectRegister: 'auto',
              workbox: {
                cleanupOutdatedCaches: true,
                globPatterns: ['**/*.{js,css,html,png,svg,ico}']
              },
              manifest: {
                name: 'Mesmer Dashboard',
                short_name: 'Mesmer',
                description: 'Dashboard for Mesmer project data visualization',
                theme_color: '#000000',
                background_color: '#000000',
                display: 'standalone',
                orientation: 'portrait',
                icons: [
                  { src: '/monitor111.png', sizes: '192x192', type: 'image/png' },
                  { src: '/monitor111.png', sizes: '512x512', type: 'image/png' },
                  { src: '/monitor111.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
                ]
              },
              devOptions: {
                enabled: false,
                type: 'module'
              }
            }
          ]
        ]
})
