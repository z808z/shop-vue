<template>
  <nav class="navbar is-light" role="navigation" aria-label="navigation">
    <div class="container is-widescreen">
      <div class="navbar-item">
        <router-link to="/" class="navbar-item">Главная</router-link>
        <router-link to="/about" class="navbar-item">О нас</span></router-link>
      </div>
      <div class="navbar-end">
        <router-link to="/cart" class="navbar-item">Корзина <span class="tag is-primary">{{ cartCount }}</span></router-link>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'cartCount'

    ])
  }
}
</script>

<style>
  .tag {
    margin-left: 5px
  }
</style>
