<template>
  <div>
    <div class="wrapper">
      <div class="auth">
        <form @submit.prevent="onSubmit" class="auth__form">
          <BaseInput v-model="user.email" type="email">Email: </BaseInput>
          <BaseInput v-model="user.password" type="password"
            >Password:
          </BaseInput>
          <BaseButton class="auth__form-btn">Вход</BaseButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("signInUserAdmin", this.user)
        .then(res => {
          this.$router.push("/admin");
        })
        .catch(e => {
          console.log(e);

          //reset
          this.user.email = "";
          this.user.password = "";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.auth {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__form {
    width: 60%;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
