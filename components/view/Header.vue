<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__row">
        <nuxt-link to="/" class="header__logo">nuxt-blog</nuxt-link>
        <nav class="header__menu menu">
          <nuxt-link to="/about" class="menu__item">Автор</nuxt-link>
          <nuxt-link to="/blog" class="menu__item">Статьи</nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
