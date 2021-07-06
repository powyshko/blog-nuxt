<template>
  <div class="base-input base-textarea">
    <label><slot /></label>
    <textarea
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.base-textarea {
  textarea {
    display: block;
    width: 100%;
    min-height: 200px;
    margin: 15px 0px 15px 0px;
    border-radius: 10px;
    padding: 15px;
  }
}
</style>
