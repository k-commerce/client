<template>
  <div class="categoryMenu">
    <ul v-for="(parentCategory, idx) in categories" :key="idx" class="parentCategory">
      <li @click="openChildCategory(idx)">
        {{ parentCategory.name }}<i class="fas fa-caret-down fa-lg"></i>
      </li>
      <ul v-for="(childCategory, idx2) in parentCategory.childList" :key="idx2" class="childCategory">
        <li @click="goToItemList(childCategory.id)">{{ childCategory.name }}</li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: []
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      this.$axios.get('/api/categories')
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].depth === 0) {
              this.categories.push(response.data[i])
            }
          }
        })
    },
    openChildCategory (idx) {
    },
    goToItemList (categoryId) {
      this.$router.push({ name: 'itemList', params: { id: categoryId } })
      this.$emit('hideMenu')
    }
  }
}
</script>

<style scoped>
.categoryMenu {
  width: 27rem;
  background-color: #f6f6f6;
  position: fixed;
  height: 44rem;
  z-index: 2;
}

.parentCategory {
  list-style-type: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.parentCategory:hover {
  background-color: aliceblue;
}

.parentCategory > li {
  border: 1px solid #ddd;
  margin-top: -1px;
  background-color: #f6f6f6;
  padding: 0.6rem;
  cursor: pointer;
}

.parentCategory > li:hover {
  background-color: aliceblue;
}

.parentCategory > li > i {
  float: right;
}

.childCategory {
  list-style-type: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.childCategory:hover {
  background-color: aliceblue;
}

.childCategory > li {
  border: 1px solid #ddd;
  margin-top: -1px;
  background-color: white;
  padding: 0.6rem;
  cursor: pointer;
}

.childCategory > li:hover {
  background-color: aliceblue;
}
</style>
