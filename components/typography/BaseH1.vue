<template>
  <h1 class="main-title"><slot></slot></h1>
</template>

<script>
export default {
  name: "BaseH1"
};
</script>

<style lang="scss">
.main-title {
  font-size: 40px;
  color: #000000;
  font-weight: bold;
}
</style>
