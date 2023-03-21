<template>
  <main class="itemList">
    <div class="top">{{ categoryList.name }}</div>
    <ul v-for="(category, idx) in categoryList.childList" :key="idx">
      <li @click="goToItemList(category.id)">{{ category.name }}</li>
    </ul>
    <div class="container">
      <div class="card" v-for="(item, idx) in itemList" :key="idx" @click="goToItem(item.id)">
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
      itemList: [],
      categoryList: []
    }
  },
  created () {
    this.categoryId = this.$route.params.id
    this.getItemList()
    this.getCategories()
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
    },
    getCategories () {
      this.$axios.get('/api/categories')
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].depth === 0) {
              for (let j = 0; j < response.data[i].childList.length; j++) {
                if (response.data[i].childList[j].id === parseInt(this.categoryId)) {
                  this.categoryList = response.data[i]
                  break
                }
              }
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    goToItemList (categoryId) {
      this.$router.push({ name: 'itemList', params: { id: categoryId } })
    },
    goToItem (itemId) {
      this.$router.push({ name: 'item', params: { id: itemId } })
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

.card:hover {
  cursor: pointer;
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
