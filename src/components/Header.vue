<template>
  <header>
    <i class="fas fa-bars" @click="categoryModalFunc" />
    <span>
      <input type="text" />
      <i class="fas fa-search" />
    </span>
    <i class="fas fa-shopping-cart" />
    <i class="fas fa-user" />
  </header>
  <CategoryModal v-if="categoryModalVal" />
</template>

<script>
import CategoryModal from '@/components/CategoryModal'
export default {
  data () {
    return {
      categoryModalVal: false
    }
  },
  components: {
    CategoryModal
  },
  methods: {
    categoryModalFunc () {
      if (this.categoryModalVal === false) {
        this.categoryModalVal = true
      } else {
        this.categoryModalVal = false
      }
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  font-size: 2rem;
  color: lightgray;
}

header > i:hover,
header > span > i:hover {
  color: gray;
}

header > span {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.6rem 0.2rem 1rem;
  border: 1px solid lightgray;
  border-radius: 2rem;
}

header > span > input {
  width: 12rem;
  border: none;
  outline: none;
}
</style>
