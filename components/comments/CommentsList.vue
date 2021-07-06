<template>
  <div class="comments">
    <BaseH1 class="comments__title">Комментарии</BaseH1>
    <Message v-if="comments.length == 0">Проккоментируй статью первым</Message>
    <div class="comments__row" v-if="comments.length > 0">
      <Comment v-for="comment in comments" :key="comment.id" :data="comment" />
    </div>
  </div>
</template>

<script>
import Comment from "@/components/comments/Comment";

export default {
  name: "CommentsList",
  components: { Comment },
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss">
.comments {
  margin: 50px 0px 0px 0px;

  &__title {
    margin: 0px 0px 30px 0px;
  }

  &__row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
