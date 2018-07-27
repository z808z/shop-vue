<template>
  <div class="cart">
    <p v-show="!products.length"><i>Корзина пуста :)</i></p>
    <div v-show="products.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Стоимость</th>
            <th>Количество</th>
            <th>Всего</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="p in products">
          <td><router-link :to="{name: 'product', params: {id: p.id}}">{{ p.title }}</router-link></td>
          <td>{{ p.price }} руб.</td>
          <td>{{ p.quantity }}</td>
          <td>{{ p.price * p.quantity }} руб.</td>
        </tr>
        <tr>
          <td><b>Итого</b></td>
          <td></td>
          <td></td>
          <td>{{ total }} руб.</td>
        </tr>
        </tbody>
      </table>
      <button class='button is-primary'>Оформить заказ</button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        products: 'cartProducts'
      }),
      total () {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    methods: {
      ...mapActions([

      ])
    }
  }
</script>

<style>
  .table {
    width: 100%;
  }
</style>
