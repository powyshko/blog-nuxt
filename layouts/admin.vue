<template>
  <client-only>
    <div class="wrapper-admin">
      <LeftColumn>
        <nuxt-link to="/admin" class="menu-admin__item">Профиль</nuxt-link>
        <nuxt-link to="/admin/blog" class="menu-admin__item">Блог</nuxt-link>
        <nuxt-link to="/admin/comments" class="menu-admin__item"
          >Комментарии</nuxt-link
        >
        <span @click="logoutUser" class="menu-admin__item">Выход</span>
      </LeftColumn>
      <Nuxt class="admin-body" />
    </div>
  </client-only>
</template>

<script>
import LeftColumn from "@/components/admin/LeftColumn";

export default {
  name: "admin",
  components: { LeftColumn },
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUserAdmin");
    }
  }
};
</script>

<style lang="scss" scoped>
.admin-body {
  width: calc(100% -340px);
  padding: 30px 40px 40px 0px;
  margin: 0px 0px 0px 340px;
}
</style>
