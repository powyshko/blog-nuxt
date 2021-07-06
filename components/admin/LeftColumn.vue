<template>
  <div class="left-column">
    <nuxt-link to="/admin" class="left-column__logo">blog-nuxt</nuxt-link>
    <nav class="left-column__menu menu-admin">
      <slot></slot>
    </nav>
  </div>
</template>

<script>
export default {
  name: "LeftColumn",
  layout: "admin"
};
</script>

<style lang="scss" scoped>
.menu-admin__item {
  &:last-child {
    margin: 150px 0px 0px 20px;
    cursor: pointer;
  }
}
</style>
