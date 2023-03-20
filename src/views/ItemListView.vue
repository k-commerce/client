<template>
  <main class="itemList">
    <div class="top">Category</div>
    <ul>
      <li>Category 1-1</li>
      <li>Category 1-2</li>
      <li>Category 1-3</li>
    </ul>
    <div class="container">
      <div class="card" v-for="(item, idx) in itemList" :key="idx">
        <img src="@/assets/images/git.png" alt="">
        <div>
          <h5>{{ item.name }}</h5>
          <p>{{ item.description }}</p>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      categoryId: 0,
      itemList: []
    }
  },
  created () {
    this.categoryId = this.$route.params.id
    this.getItemList()
  },
  methods: {
    getItemList () {
      this.$axios.get('/api/items/' + this.categoryId)
        .then((response) => {
          this.itemList = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.top {
  text-align: center;
  margin-bottom: 0.8rem;
}

.itemList > ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.itemList > ul > li {
  border: 1px solid #ddd;
  margin-top: -1px;
  background-color: #f6f6f6;
  padding: 0.8rem;
  cursor: pointer;
  text-align: center;
}
.itemList > ul > li:hover {
  background-color: aliceblue;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.card {
  margin: 0.8rem;
}

.card > img {
  width: 10rem;
  object-fit: cover;
  display: block;
  margin: auto;
}

.card > div > h5 {
  margin: 0.5rem;
}
</style>
