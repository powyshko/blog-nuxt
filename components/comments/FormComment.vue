<template>
  <div class="leave-comment">
    <BaseH1 class="leave-comment__title">Оставить комментарий</BaseH1>
    <Message v-if="msg" :class="`sentMsg`"
      >Коментарий отправлен на проверку модератору!</Message
    >
    <form @submit.prevent="submit" class="comment-form">
      <BaseInput v-model="comment.name">Имя</BaseInput>
      <BaseTextArea v-model="comment.text">Текст комментария</BaseTextArea>
      <BaseButton>Опубликовать</BaseButton>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComment",
  data() {
    return {
      comment: {
        name: "",
        text: ""
      },
      msg: false
    };
  },
  methods: {
    submit() {
      this.msg = true;
      this.$emit("submit", this.comment);

      setTimeout(() => {
        this.msg = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss">
.comment-form {
  margin: 50px auto 0px;
  width: 70%;
}

.leave-comment {
  text-align: center;
  margin: 50px 0px 0px 0px;

  &__title {
    margin: 0px 0px 10px 0px;
  }
}
</style>
