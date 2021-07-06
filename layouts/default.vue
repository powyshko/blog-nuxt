<template>
  <div>
    <Header />
    <Nuxt class="main-content" />
  </div>
</template>

<script>
import Header from "@/components/view/Header";

export default {
  name: "deafault",
  components: { Header }
};
</script>

<style lang="scss">
.main-content {
  padding: 100px 0px 100px 0px;
}
</style>
