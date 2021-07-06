<template>
  <div class="message" :class="msgClass"><slot></slot></div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msgClass: {
      type: String,
      default: "primaryMsg"
    }
  }
};
</script>

<style lang="scss">
.message {
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}

.primaryMsg {
  color: #4339f2;
}

.errorMsg {
  color: #ff3a29;
}

.sentMsg {
  color: #34b53a;
}
</style>
