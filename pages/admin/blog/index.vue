<template>
  <div class="blog">
    <BaseH1 class="blog__title">Статьи</BaseH1>
    <BaseButton :to="`/admin/new-post`" class="blog__add"
      >Создать статью</BaseButton
    >
    <PostList :admin="true" :posts="getPosts" />
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["auth"],
  computed: {
    getPosts() {
      return this.$store.getters.getPosts;
    }
  }
};
</script>
