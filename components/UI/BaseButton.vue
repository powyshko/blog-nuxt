<template>
  <nuxt-link v-if="to" class="btn" :class="btnClass" :to="to">
    <!-- slot -->
    <slot />
  </nuxt-link>
  <button
    v-else
    class="btn"
    :class="btnClass"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <!-- slot -->
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    to: {
      type: String,
      default: ""
    },
    btnClass: {
      type: String,
      default: "btnPrimary"
    }
  }
};
</script>

<style lang="scss">
.btn {
  font-size: 14px;
  line-height: 20px;
  padding: 16px 22px 14px 22px;
  border-radius: 10px;
  display: inline-block;
}

.btnPrimary {
  color: #ffffff;
  background: #4339f2;
}

.btnWhite {
  color: #4339f2;
  background: #ffffff;
}

.btnDanger {
  background: #ff3a29;
  color: #ffffff;
}
</style>
