<template>
  <main class="orderDetailsModal">
    <div class="top">
      <span>주문상세</span>
      <i class="fas fa-times fa-lg" @click="modalClose"></i>
    </div>
    <div class="container">
      <strong>2023. 03. 06 주문</strong>
      <div class="card">
        <h5>결제 정보</h5>
        <div class="cardData">
          <span class="left">상품 가격</span>
          <span class="right">123,456 원</span>
        </div>
        <hr>
        <div class="cardData">
          <span class="left">결제 수단</span>
          <span class="right">신용카드</span>
        </div>
        <div class="cardData">
          <span class="left">총 결제금액</span>
          <span class="right">123,456 원</span>
        </div>
      </div>
      <div class="card">
        <h5>고영훈</h5>
        <p class="address">(18440) 경기도 화성시 병점2로 35 106동 603호 (병점동, 주공1단지아파트)</p>
        <p class="phone">010-5481-1708</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    modalClose () {
      this.$emit('modalClose')
    }
  }
}
</script>

<style scoped>
.orderDetailsModal {
  width: 27rem;
  background-color: #f6f6f6;
  position: fixed;
}

.top {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.top > i {
  float: right;
  cursor: pointer;
  margin-right: 1rem;
}

.container {
  margin-left: 1rem;
  margin-right: 1rem;
}

.card {
  background-color: white;
  border-radius: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.5rem;
}

.card > h5 {
  margin-top: 0rem;
  margin-bottom: 0.5rem;
}

.cardData {
  margin-bottom: 0.2rem;
}

.cardData > .right {
  float: right;
}

.card > .address {
  margin-top: 0rem;
  margin-bottom: 0.5rem;
}

.card > .phone {
  margin-top: 0rem;
  margin-bottom: 0.5rem;
}

</style>
