<template>
  <div class="memberModal">
    <ul>
      <li>주문 내역</li>
      <li @click="goTo('/addresses')">배송지 관리</li>
      <li>내 정보 관리</li>
      <li>로그아웃</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$emit('goTo', path)
    }
  }
}
</script>

<style scoped>
.memberModal {
  position: fixed;
  z-index: 2;
  width: 27rem;
  height: 44rem;
  background-color: #f6f6f6;
}

.memberModal > ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.memberModal > ul > li {
  padding: 1rem;
  border: 1px solid #ddd;
  cursor: pointer;
}

.memberModal > ul > li:hover {
  background-color: aliceblue;
}
</style>
