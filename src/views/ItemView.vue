<template>
  <main class="item">
    <img src="@/assets/images/git.png" />

    <div>
      <span>{{ item.name }}</span>
      <span>{{ item.price }} 원</span>
    </div>

    <div>
      <span>
        <button @click="countMinus">-</button>
        <input type="text" v-model="count" />
        <button @click="countPlus">+</button>
      </span>
      <span>총 {{ item.price * count }} 원</span>
    </div>

    <div>
      <button>장바구니</button>
      <button @click="goToOrder">바로구매</button>
    </div>

    <div>{{ item.description }}</div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      itemId: 0,
      item: null,
      count: 1
    }
  },
  methods: {
    getItem () {
      this.$axios.get('/api/items/' + this.itemId)
        .then(response => {
          this.item = response.data
        })
    },
    countMinus () {
      if (this.count > 1) {
        this.count--
      }
    },
    countPlus () {
      this.count++
    },
    goToOrder () {
      this.$store.commit('setOrderCheck', [{ id: this.itemId, count: this.count }])
      this.$router.push('/order')
    }
  },
  created () {
    this.itemId = parseInt(this.$route.params.id)
    this.getItem()
  }
}
</script>

<style scoped>
.item > img {
  display: block;
  width: 20rem;
  height: 20rem;
  margin: 1rem auto;
}

.item > div:nth-child(2) {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.item > div:nth-child(3) {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

.item > div:nth-child(3) > span > input {
  text-align: center;
}

.item > div:nth-child(4) {
  text-align: center;
}

.item > div:nth-child(4) > button {
  width: 10rem;
  height: 2rem;
  margin: 1rem;
}

.item > div:nth-child(5) {
  padding: 1rem;
}
</style>
