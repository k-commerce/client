<template>
  <div class="orderDetailsModal">
    <div class="top">
      <span>주문상세</span>
      <i class="fas fa-times fa-lg" @click="modalClose"></i>
    </div>
    <div class="container">
      <strong>{{ orderDetails[0].order.createdDate.substr(0, 4) }}. {{ orderDetails[0].order.createdDate.substr(5, 2) }}. {{ orderDetails[0].order.createdDate.substr(8, 2) }} 주문</strong>
      <div class="card">
        <h5>결제 정보</h5>
        <div class="cardData" v-for="(od, idx) in orderDetails" :key="idx">
          <span class="left">상품 가격</span>
          <span class="right">{{ od.orderPrice }} 원</span>
        </div>
        <hr />
        <div class="cardData">
          <span class="left">결제 수단</span>
          <span class="right">{{ orderDetails[0].order.payment === 'CARD' ? '신용카드' : orderDetails[0].order.payment === 'DEPOSIT' ? '무통장입금' : '알수없음' }}</span>
        </div>
        <div class="cardData">
          <span class="left">총 결제금액</span>
          <span class="right">{{ totalPrice }} 원</span>
        </div>
      </div>
      <div class="card">
        <h5>{{ orderDetails[0].order.name }}</h5>
        <p class="address">({{ orderDetails[0].order.address.postcode }}) {{ orderDetails[0].order.address.selected }} {{ orderDetails[0].order.address.detailed }}</p>
        <p class="phone">{{ orderDetails[0].order.phoneNumber.substr(0,3) }}-{{ orderDetails[0].order.phoneNumber.substr(3,4) }}-{{ orderDetails[0].order.phoneNumber.substr(7,4) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['orderDetails'],
  data () {
    return {
      totalPrice: 0
    }
  },
  created () {
    this.sumTotalPrice()
  },
  methods: {
    modalClose () {
      this.$emit('modalClose')
    },
    sumTotalPrice () {
      for (let i = 0; i < this.orderDetails.length; i++) {
        this.totalPrice += this.orderDetails[i].orderPrice
      }
    }
  }
}
</script>

<style scoped>
.orderDetailsModal {
  width: 27rem;
  background-color: #f6f6f6;
  position: fixed;
  height: 44rem;
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
