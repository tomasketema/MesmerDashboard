// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: false },
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
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          icons: [
            {
              src: '/monitor.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: '/monitor1.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ]
        },
        devOptions: {
          enabled: true,
          type: 'module'
        }
      }
    ]
  ]
})
