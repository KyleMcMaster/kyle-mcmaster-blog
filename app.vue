<template>
  <div class="sm:py-4">
    <Html lang="en" />
    <Meta property="og:image" content="/headshot.png" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar />
    <NuxtPage />
  </div>
</template>

<!-- Google tag (gtag.js) -->
<!-- <script>
if (process.browser) {
  window.dataLayer = window.dataLayer || []
  function gtag () { dataLayer.push(arguments) }
  gtag('js', new Date())

  gtag('config', 'G-7L339H9YR9')
}
</script> -->
<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
