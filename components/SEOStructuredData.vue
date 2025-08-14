<template>
  <!-- This component is for structured data only, no visual output -->
  <Head>
    <script type="application/ld+json" v-if="structuredData">
      {{ JSON.stringify(structuredData) }}
    </script>
  </Head>
</template>

<script setup lang="ts">
interface Props {
  type?: 'Person' | 'BlogPosting' | 'Organization' | 'WebSite'
  title?: string
  description?: string
  author?: string
  datePublished?: string
  dateModified?: string
  url?: string
  image?: string
  keywords?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  type: 'WebSite',
  author: 'Kyle McMaster'
})

const structuredData = computed(() => {
  const baseUrl = 'https://kyle-mcmaster-blog.vercel.app'
  
  if (props.type === 'Person') {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kyle McMaster",
      "jobTitle": "Software Developer & Consultant",
      "worksFor": {
        "@type": "Organization",
        "name": "NimblePros"
      },
      "url": baseUrl,
      "sameAs": [
        "https://github.com/KyleMcMaster",
        "https://twitter.com/KyleMcMaster"
      ],
      "knowsAbout": [
        "Software Development",
        "C# Programming",
        ".NET Framework",
        "Event Driven Architecture",
        "NServiceBus",
        "Distributed Systems",
        "Software Consulting"
      ]
    }
  }
  
  if (props.type === 'BlogPosting') {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": props.title,
      "description": props.description,
      "author": {
        "@type": "Person",
        "name": props.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Kyle McMaster Blog",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/cover.jpg`
        }
      },
      "datePublished": props.datePublished,
      "dateModified": props.dateModified || props.datePublished,
      "url": props.url,
      "image": props.image ? `${baseUrl}${props.image}` : `${baseUrl}/cover.jpg`,
      "keywords": props.keywords?.join(', '),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": props.url
      }
    }
  }
  
  if (props.type === 'Organization') {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NimblePros",
      "url": "https://nimblepros.com/",
      "employee": {
        "@type": "Person",
        "name": "Kyle McMaster"
      },
      "serviceType": "Software Development Consulting"
    }
  }
  
  // Default WebSite structured data
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kyle McMaster Blog",
    "url": baseUrl,
    "description": "Software development insights, tutorials, and experiences by Kyle McMaster. Specializing in C#, .NET, event-driven architecture, and modern software engineering practices.",
    "author": {
      "@type": "Person",
      "name": "Kyle McMaster"
    },
    "publisher": {
      "@type": "Person",
      "name": "Kyle McMaster"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }
})
</script>