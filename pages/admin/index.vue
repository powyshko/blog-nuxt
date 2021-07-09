<template>
  <h1>hello admin</h1>
</template>
<script>
export default {
  layout: "admin",
  middleware: ["auth"],
};
</script>
