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
        manifest: {
          name: 'Mesmer Dashboard',
          short_name: 'Mesmer',
          description: 'Dashboard for Mesmer project data visualization',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          icons: [
            { src: '/monitor.png', sizes: '192x192', type: 'image/png' },
            { src: '/monitor1.png', sizes: '512x512', type: 'image/png' }
          ]
        },
      }
    ]
  ]
})
