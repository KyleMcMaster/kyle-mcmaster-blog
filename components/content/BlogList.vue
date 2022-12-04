<template>
  <ContentList v-slot="{ list }" path="/blog">
    <div v-for="blog in list.filter(removeIndexFromList).reverse()" :key="blog._path">
      <div class="rounded overflow-hidden shadow-xl">
        <NuxtLink :to="blog._path" active-class="font-bold" class="">
          <h2>{{ blog.navTitle || blog.title }}</h2>
          <img :src="blog.image">
        </NuxtLink>
        <p>{{ getFormattedDate(parseDateString(blog.date)) }}</p>
        <!-- <p class="no-underline description">{{ blog.description }}</p> -->
        <p>{{ blog.description }}</p>
      </div>
    </div>
  </ContentList>
</template>

<script lang="ts" setup>
function removeIndexFromList (blog: any): boolean {
  return blog.title !== 'Blog'
}
function parseDateString (str: string): number {
  // console.log(str);
  return Date.parse(str)
}
function getFormattedDate (date: number): string {
  const blogDate = new Date(date)
  const month = blogDate.getMonth() + 1
  const year = blogDate.getFullYear()
  const day = blogDate.getDate() + 1

  return `${month.toString()}/${day.toString()}/${year.toString()}`
}
</script>

<!-- <style scoped>
.description p {
  text-decoration: none;
}
</style> -->
