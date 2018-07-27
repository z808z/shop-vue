<template>
<div class="app">
  <header class="main-header">
    <header-bar></header-bar>
  </header>
  <div class="page">
    <div class="container">
      <section class="section">
        <router-view></router-view>
      </section>
    </div>
  </div>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>SPA vue shop</strong><br>by <a href="https://solomein.ru" target="_blank">solomein.ru</a> aka z808z
      </p>
    </div>
  </footer>
</div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  components: {
    HeaderBar
  },
  name: 'app'
}
</script>

<style>

</style>
