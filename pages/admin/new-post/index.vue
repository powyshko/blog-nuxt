<template>
  <div class="new-post">
    <BaseH1 class="new-post__title">Создать статью</BaseH1>
    <FormBlog @cancel="onCancel" @save="onSave"></FormBlog>
  </div>
</template>

<script>
import FormBlog from "@/components/admin/FormBlog";

export default {
  layout: "admin",
  middleware: ["auth"],
  components: { FormBlog },
  methods: {
    onCancel() {
      this.$router.push("/admin/blog");
    },
    onSave(post) {
      this.$store.dispatch("addPost", post).then(() => {
        this.$router.push("/admin/blog");
      });
    }
  }
};
</script>

<style lang="scss"></style>
