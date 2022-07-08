
<template>
  <ContentList v-slot="{ list }" path="/blog">
    <div v-for="blog in list" :key="blog._path">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.description }}</p>
    </div>
  </ContentList>
</template>