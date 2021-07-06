<template>
  <h2 class="subtitle"><slot></slot></h2>
</template>

<script>
export default {
  name: "BaseH2"
};
</script>

<style lang="scss">
.subtitle {
  font-size: 20px;
  color: #000000;
}
</style>
