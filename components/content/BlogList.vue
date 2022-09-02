<template>
  <ContentList v-slot="{ list }" path="/blog">
    <a />
    <div v-for="blog in list" :key="blog._path">
      <img :src="blog.image">
      <NuxtLink
        :to="blog._path"
        active-class="font-bold"
        class=""
      >
        <h2>{{ blog.navTitle || blog.title }}</h2>
      </NuxtLink>
      <p>{{ blog.description }}</p>
    </div>
  </ContentList>
</template>
