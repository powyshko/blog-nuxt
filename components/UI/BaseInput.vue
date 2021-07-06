<template>
  <div class="base-input">
    <label><slot /></label>
    <input
      :type="type"
      :value="value"
      v-bind="$attrs"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.base-input {
  font-size: 16px;
  font-weight: 500;

  input {
    display: block;
    width: 100%;
    margin: 15px 0px 15px 0px;
    height: 70px;
    border-radius: 10px;
    padding: 0px 15px;
  }
}
</style>
