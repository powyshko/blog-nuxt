<template>
  <div>
    <div class="wrapper">
      <div class="article">
        <div
          class="article__header"
          :style="{
            background: `url(${post.image}) no-repeat`,
            'background-size': 'cover'
          }"
        >
          <div class="article__header-body">
            <BaseH1 class="article__title">{{ post.title }}</BaseH1>
            <div class="article__subject">{{ post.subject }}</div>
          </div>
        </div>
        <div class="article__body">
          <p class="article__text">{{ post.text }}</p>
        </div>
      </div>
      <div class="comments">
        <CommentsList :comments="comments" />
        <FormComment @submit="onSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import FormComment from "@/components/comments/FormComment";
import CommentsList from "@/components/comments/CommentsList";

export default {
  components: { FormComment, CommentsList },
  async asyncData({ $axios, params }) {
    let [post, comments] = await Promise.all([
      $axios.get(
        `https://blog-nuxt-js-a2cd0-default-rtdb.firebaseio.com/posts/${params.id}.json`
      ),
      $axios.get(
        `https://blog-nuxt-js-a2cd0-default-rtdb.firebaseio.com/comments.json`
      )
    ]);

    let commentsArray = [],
      commentsPost = [];

    if (comments.data != null) {
      Object.keys(comments.data).forEach(key => {
        commentsArray.push(comments.data[key]);
      });
    }

    for (let i = 0; i < commentsArray.length; i++) {
      if (
        commentsArray[i].idPost === params.id &&
        commentsArray[i].publish === true
      ) {
        commentsPost.push(commentsArray[i]);
      }
    }

    return { post: post.data, comments: commentsPost };
  },
  data() {
    return {
      post: null,
      comments: null
    };
  },
  methods: {
    onSubmit(comment) {
      this.$axios
        .post(
          `https://blog-nuxt-js-a2cd0-default-rtdb.firebaseio.com/comments.json`,
          {
            idPost: this.$route.params.id,
            publish: false,
            ...comment
          }
        )
        .then(() => {
          comment.name = "";
          comment.text = "";
        });
    }
  }
};
</script>
