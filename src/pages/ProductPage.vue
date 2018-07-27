<template>
  <div class="product-item">
    <router-link to="/" class="back-link">На главную</router-link>
    <div class="columns">
      <div class="column">
        <figure class="image">
          <img :src="product.img" alt="Product image">
        </figure>
      </div>
      <div class="column">
        <h1 class="title">{{ product.title }}</h1>
        <div v-html="product.content"></div>
        <hr>
        <button class="button is-primary" @click="addToCart(product)">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    mounted () {
      this.getAllProducts()
    },
    computed: {
      ...mapGetters([
        'allProducts'
      ]),
      product () {
        let id = parseInt(this.$route.params.id)
        return this.allProducts.find((p) => p.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllProducts',
        'addToCart'
      ])
    }
  }
</script>

<style>
  .back-link {
    margin-bottom: 40px;
    display: block;
  }
</style>
