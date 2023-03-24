<template>
  <main class="item">
    <img src="@/assets/images/git.png" alt="">
    <div class="itemInfo">
      <h5>{{ item.name }}</h5>
      <p>{{ item.price }} 원</p>
    </div>
    <hr>
    <div class="calculation">
      <button @click="countMinus">-</button>
      <input type="text" v-model="count">
      <button @click="countPlus">+</button>
      <p>{{ item.price * count }} 원</p>
    </div>
    <hr>
    <div class="buttons">
      <button>장바구니</button>
      <button @click="goToOrder">바로구매</button>
    </div>
    <div>
      {{ item.description }}
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      itemId: 0,
      count: 1,
      item: []
    }
  },
  created () {
    this.itemId = parseInt(this.$route.params.id)
    this.getItem()
  },
  methods: {
    countMinus () {
      if (this.count > 1) {
        this.count--
      }
    },
    countPlus () {
      this.count++
    },
    getItem () {
      this.$axios.get('/api/items/' + this.itemId)
        .then((response) => {
          this.item = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    goToOrder () {
      this.$store.commit('setOrderCheck', [{ id: this.itemId, count: this.count }])
      this.$router.push('/order')
    }
  }
}
</script>

<style scoped>
.item > img {
  width: 20rem;
  object-fit: cover;
  display: block;
  margin: auto;
}

.itemInfo > h5 {
  margin: 0.5rem;
}

.itemInfo > p {
  margin-left: 0.5rem;
}

.calculation > p {
  display: inline-block;
  margin: 0px;
  margin-left: 9rem;
}

.calculation > input {
  text-align: center;
}

.buttons {
  text-align: center;
  margin-bottom: 1rem;
}
.buttons > button {
  width: 10rem;
  height: 2rem;
  margin-top: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>
