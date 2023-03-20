<template>
  <header>
    <i class="fas fa-bars" @click="showMenu(1)" />
    <span>
      <input type="text" />
      <i class="fas fa-search" />
    </span>
    <i class="fas fa-shopping-cart" />
    <i class="fas fa-user" @click="showMenu(2)" />
  </header>
  <CategoryMenu v-show="menu === 1" @hideMenu="hideMenu" />
  <MemberMenu v-show="menu === 2" @hideMenu="hideMenu" />
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu'
import MemberMenu from '@/components/MemberMenu'

export default {
  components: {
    CategoryMenu,
    MemberMenu
  },
  data () {
    return {
      menu: 0
    }
  },
  computed: {
    accessToken () {
      return this.$store.getters.getAccessToken
    },
    principal () {
      return this.$store.getters.getPrincipal
    }
  },
  methods: {
    showMenu (menu) {
      if (menu === 2 && (!this.accessToken || !this.principal)) {
        this.$router.push('/login')
        return
      }
      this.menu = this.menu === menu ? 0 : menu
    },
    hideMenu () {
      this.menu = 0
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
