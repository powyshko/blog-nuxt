<template>
  <div>
    <div class="wrapper">
      <div class="main-about">
        <div class="main-about__avatar">
          <img :src="author.avatar" alt="" />
        </div>
        <BaseH1 class="main-about__title">{{ author.title }}</BaseH1>
        <p class="main-about__descr">{{ author.descr }}</p>
        <BaseButton to="/about" class="main-about__btn">Об авторе</BaseButton>
      </div>
      <div class="main-posts">
        <BaseH1 class="main-posts__title">Статьи</BaseH1>
        <PostList :posts="getPosts" />
        <div class="main-posts__link">
          <BaseButton to="/blog" class="main-posts__btn">Все статьи</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: {
        avatar:
          "https://sun9-59.userapi.com/impg/oApwOHhS7_ZgShTkLNYzAJXeX3WYkhDojOoHLg/DmFyZLliWJI.jpg?size=1085x1356&quality=96&sign=b60a38416aeb58a376a02751b11b81dc&type=album",
        title: "Из пугливого параноика в уверенную бизнесвуман",
        descr:
          "Всем привет 🤟🏻 меня зовут Анфиса и я Бьюти зависимый Лешмейкер с 2-х летним опытом 😈"
      }
    };
  },
  computed: {
    getPosts() {
      return this.$store.getters.getPosts;
    }
  }
};
</script>

<style lang="scss"></style>
