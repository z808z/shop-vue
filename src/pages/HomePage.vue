<template>
  <div class="columns">
    <div v-for="product in allProducts" class="product column is-two-fifths">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="product.img" alt="Product image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <router-link :to="{name: 'product', params: {id: product.id}}" class="title is-4">{{ product.title }}</router-link>
            </div>
          </div>
          <div class="content">
            {{ product.description }}
            <h4 class="title is-4">{{ product.price }} руб.</h4>
            <button class="button is-primary" @click="addToCart(product)">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    mounted () {
      this.getAllProducts()
    },
    computed: {
      ...mapGetters([
        'allProducts'
      ])
    },
    methods: {
      ...mapActions([
        'getAllProducts',
        'addToCart'

      ])
    }
  }
</script>
