<template>
  <header>
    <i class="fas fa-bars" />
    <span>
      <input type="text" />
      <i class="fas fa-search" />
    </span>
    <i class="fas fa-shopping-cart" />
    <i class="fas fa-user" />
  </header>
</template>

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
