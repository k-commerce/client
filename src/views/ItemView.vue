<template>
  <main class="item">
    <img src="@/assets/images/git.png" alt="">
    <div class="itemInfo">
      <h5>상품명</h5>
      <p>50,000원</p>
    </div>
    <hr>
    <div class="calculation">
      <button @click="countMinus">-</button>
      <input type="text" v-model="count">
      <button @click="countPlus">+</button>
      <p>123,456원</p>
    </div>
    <hr>
    <div class="buttons">
      <button>장바구니</button>
      <button>바로구매</button>
    </div>
    <div>
      상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      count: 1
    }
  },
  methods: {
    countMinus () {
      if (this.count > 1) {
        this.count--
      }
    },
    countPlus () {
      this.count++
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
