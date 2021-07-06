<template>
  <div
    clss="column-container"
    style="break-inside: avoid-column; margin: 0px 0px 20px 0px;"
  >
    <div class="blog__item article-block">
      <div class="article-block__category">
        <div class="article-block__category-item">{{ data.subject }}</div>
      </div>
      <div class="article-block__image"><img :src="data.image" alt="" /></div>
      <BaseH2 class="article-block__title">{{ data.title }}</BaseH2>
      <p class="article-block__descr">
        {{ data.descr }}
      </p>
      <nuxt-link
        :to="getLinks"
        class="article-block__detalies"
        >{{ textDetalies }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    data: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    textDetalies() {
      return this.admin ? "Редактировать" : "Подробнее";
    },
    getLinks() {
      return this.admin
        ? `/admin/blog/${this.data.id}`
        : `/blog/${this.data.id}`;
    }
  }
};
</script>
