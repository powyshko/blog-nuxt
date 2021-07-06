<template>
  <div class="comment">
    <div class="comment__name">{{ data.name }}</div>
    <div class="comment__text">
      {{ data.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.comment {
  width: 50%;
  padding: 20px;
  background: #ffffff;
  border-radius: 20px;
  margin: 0px 0px 20px 0px;

  &__name {
    font-weight: bold;
    font-size: 18px;
    display: inline-block;
    padding: 8px;
    border-radius: 6px;
    background: #e2fbd7;
    margin: 0px 0px 10px 0px;
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
