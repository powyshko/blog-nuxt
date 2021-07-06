<template>
  <div class="blog__body">
    <div class="blog__row">
      <PostItem
        :admin="admin"
        v-for="post in posts"
        :key="post.id"
        :data="post"
      />
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/blog/PostItem";

export default {
  name: "PostList",
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      default: () => []
    },
    admin: {
      type: Boolean,
      default: false
    }
  }
};
</script>
