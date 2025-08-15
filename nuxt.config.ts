export default defineNuxtConfig({
  extends: 'content-wind',

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-09-02',
  modules: ['@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  site: {
    url: 'https://kylemcmaster.com',
    name: 'Kyle McMaster Blog',
    description: 'Software development insights, tutorials, and experiences by Kyle McMaster. Specializing in C#, .NET, event-driven architecture, and modern software engineering practices.',
    defaultLocale: 'en'
  },

  app: {
    head: {
      title: 'Kyle McMaster Blog - Software Development & Engineering Insights',
      meta: [
        { name: 'description', content: 'Software development insights, tutorials, and experiences by Kyle McMaster. Specializing in C#, .NET, event-driven architecture, and modern software engineering practices.' },
        { name: 'keywords', content: 'software development, software engineering, C# development, .NET, event driven architecture, distributed systems, NServiceBus, NimblePros, software consulting, programming, technology blog, AI, artificial intelligence, software architecture, microservices, async messaging' },
        { name: 'author', content: 'Kyle McMaster' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Kyle McMaster Blog' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Kyle McMaster Blog - Software Development & Engineering Insights' },
        { property: 'og:description', content: 'Software development insights, tutorials, and experiences by Kyle McMaster. Specializing in C#, .NET, event-driven architecture, and modern software engineering practices.' },
        { property: 'og:url', content: 'https://kylemcmaster.com' },
        { property: 'og:image', content: 'https://kylemcmaster.com/cover.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@KyleMcMaster' },
        { name: 'twitter:title', content: 'Kyle McMaster Blog - Software Development & Engineering Insights' },
        { name: 'twitter:description', content: 'Software development insights, tutorials, and experiences by Kyle McMaster. Specializing in C#, .NET, event-driven architecture, and modern software engineering practices.' },
        { name: 'twitter:image', content: 'https://kylemcmaster.com/cover.jpg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://kylemcmaster.com' }
      ]
    }
  },

  robots: {
    enabled: true,
    rules: {
      UserAgent: '*',
      Allow: '/',
      Sitemap: 'https://kylemcmaster.com/sitemap.xml'
    }
  }
})