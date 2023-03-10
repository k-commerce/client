<template>
  <header>
    <i class="fas fa-bars" @click="categoryModalFunc" />
    <span>
      <input type="text" />
      <i class="fas fa-search" />
    </span>
    <i class="fas fa-shopping-cart" />
    <i class="fas fa-user" @click="memberModalFunc" />
  </header>
  <CategoryModal v-if="categoryModalVal" />
  <MemberModal v-if="memberModalVal" @goTo="goTo" />
</template>

<script>
import CategoryModal from '@/components/CategoryModal'
import MemberModal from '@/components/MemberModal'

export default {
  data () {
    return {
      categoryModalVal: false,
      memberModalVal: false
    }
  },
  components: {
    CategoryModal,
    MemberModal
  },
  methods: {
    categoryModalFunc () {
      if (this.categoryModalVal === false) {
        this.memberModalVal = false
        this.categoryModalVal = true
      } else {
        this.categoryModalVal = false
      }
    },
    memberModalFunc () {
      if (this.memberModalVal === false) {
        this.categoryModalVal = false
        this.memberModalVal = true
      } else {
        this.memberModalVal = false
      }
    },
    goTo (path) {
      this.categoryModalVal = false
      this.memberModalVal = false
      this.$router.push(path)
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
