<template>
  <form @submit.prevent class="form-blog">
    <BaseInput v-model="post.subject">Категория: </BaseInput>
    <BaseInput v-model="post.title">Заголовок: </BaseInput>
    <BaseInput v-model="post.image">Картинка: </BaseInput>
    <BaseInput v-model="post.descr">Описание: </BaseInput>
    <BaseTextArea v-model="post.text">Текст: </BaseTextArea>
    <div class="controls">
      <BaseButton @click="cancel" :class="`btnDanger`" class="form-btn"
        >Назад</BaseButton
      >
      <BaseButton @click="save" class="form-btn">Сохранить</BaseButton>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormBlog",
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      post: this.postEdit
        ? this.postEdit
        : {
            subject: "",
            title: "",
            image: "",
            descr: "",
            text: ""
          }
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    save() {
      this.$emit("save", this.post);
    }
  }
};
</script>

<style lang="scss">
.form-blog {
  width: 600px;
  margin: 50px 0px 0px 0px;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0px 0px 0px;
}

.form-btn {
  margin: 0px 15px 0px 0px;

  &:last-child {
    margin: 0;
  }
}
</style>
