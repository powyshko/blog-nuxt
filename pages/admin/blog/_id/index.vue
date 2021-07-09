<template>
  <div class="new-post">
    <BaseH1 class="new-post__title">Редактировать статью</BaseH1>
    <FormBlog :postEdit="postEdit" @cancel="onCancel" @save="onSave"></FormBlog>
  </div>
</template>

<script>
import FormBlog from "@/components/admin/FormBlog";

export default {
  layout: "admin",
  middleware: ["auth"],
  components: { FormBlog },
  async asyncData({ $axios, params }) {
    let postEdit;
    await $axios
      .get(
        `https://blog-nuxt-js-a2cd0-default-rtdb.firebaseio.com/posts/${params.id}.json`
      )
      .then(res => {
        postEdit = { ...res.data, id: params.id };
      });
    return { postEdit };
  },
  data() {
    return {
      postEdit: null
    };
  },
  methods: {
    onCancel() {
      this.$router.push("/admin/blog");
    },
    onSave(post) {
      this.$store.dispatch("editPost", post).then(() => {
        this.$router.push("/admin/blog");
      });
    }
  }
};
</script>

<style lang="scss"></style>
