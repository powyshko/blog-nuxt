<template>
  <div>
    <div class="wrapper">
      <div class="articles">
        <BaseH1 class="articles__title">Статьи</BaseH1>
        <PostList :posts="getPosts" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getPosts() {
      return this.$store.getters.getPosts;
    }
  }
};
</script>

<style lang="scss">
.articles__title {
  margin: 20px 0px 20px 0px;
}
</style>
