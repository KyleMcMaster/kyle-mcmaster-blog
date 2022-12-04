<script lang="ts" setup>
const { navigation } = useContent()
</script>

<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
     <!-- Navigation -->
    <div class="text-gray-700 dark:text-gray-200">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold"
        class="mr-6"
      >
        {{ link.navTitle || link.title }}
      </NuxtLink>
      <nuxt-link
        :to="'https://blog.nimblepros.com'"
        active-class="font-bold"
        class="mr-4">
        NimblePros
      </nuxt-link>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 text-gray-500 transition">
      <ColorModeSwitch class="hover:text-gray-700 dark:hover:text-gray-300" />
      <a href="https://github.com/kylemcmaster" title="GitHub" class="text-green-400 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" /></a>
      <a href="https://www.linkedin.com/in/kylerobertmcmaster/" title="LinkedIn" class="text-blue-600 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:linkedin" /></a>
      <a href="https://twitter.com/kylemcmaster" title="Twitter" class="text-blue-300 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:twitter" /></a>
    </div>
  </div>
</template>
