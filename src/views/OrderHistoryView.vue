<template>
  <main class="orderHistory">
    <OrderDetailsModal class="modal" v-if="orderDetailsModalVal" @modalClose="modalClose" :orderDetails="orderDetails" />
    <div class="top">주문 목록</div>
    <hr>
    <div class="container" v-for="(orderItem, idx) in orderItemList" :key="idx">
      <div class="containerTop">
        <small>{{ orderItem[0].order.createdDate.substr(0, 4) }}. {{ orderItem[0].order.createdDate.substr(5, 2) }}. {{ orderItem[0].order.createdDate.substr(8, 2) }}</small>
        <button @click="orderDetailsModalFunc(orderItem)">주문 상세보기 ></button>
      </div>
      <div class="containerBody" v-if="orderItem.length === 1">
        <div class="card">
          <div class="cardBody">
            <span class="orderStatus">{{ (orderItem[0].status === 'SUCCESS') ? '주문완료' : (orderItem[0].status === 'CANCEL' ? '주문취소' : '알수없음') }}</span>
            <img src="@/assets/images/git.png" alt="">
            <span class="orderInfo">
              <strong>{{ orderItem[0].item.name }}</strong>
              <div>
                <span>{{ orderItem[0].item.price }} 원 / {{ orderItem[0].quantity }} 개</span>
                <button>장바구니 담기</button>
              </div>
            </span>
          </div>
          <div class="cardFoot">
            <button @click="orderCancel(orderItem[0].order.id, orderItem[0].id)">주문 취소 / 반품</button>
          </div>
        </div>
      </div>
      <div class="containerBody" v-else>
        <div class="card" v-for="(oi, idx2) in orderItem" :key="idx2">
          <div class="cardBody">
            <span class="orderStatus">{{ (oi.status === 'SUCCESS') ? '주문완료' : (oi.status === 'CANCEL' ? '주문취소' : '알수없음') }}</span>
            <img src="@/assets/images/git.png" alt="">
            <span class="orderInfo">
              <strong>{{ oi.item.name }}</strong>
              <div>
                <span>{{ oi.item.price }} 원 / {{ oi.quantity }} 개</span>
                <button>장바구니 담기</button>
              </div>
            </span>
          </div>
          <div class="cardFoot">
            <button @click="orderCancel(oi.order.id, oi.id)">주문 취소 / 반품</button>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </main>
</template>

<script>
import OrderDetailsModal from '@/components/OrderDetailsModal'
export default {
  data () {
    return {
      orderDetailsModalVal: false,
      orderItemList: [],
      orderDetails: null
    }
  },
  components: {
    OrderDetailsModal
  },
  created () {
    this.getOrderHistory()
  },
  methods: {
    orderDetailsModalFunc (orderItem) {
      if (this.orderDetailsModalVal === false) {
        this.orderDetails = orderItem
        this.orderDetailsModalVal = true
      }
    },
    modalClose () {
      this.orderDetailsModalVal = false
    },
    getOrderHistory () {
      this.$axios.get('/api/orders')
        .then((response) => {
          const groupByOrderId = response.data.reduce((acc, obj) => {
            const { order } = obj
            acc[order.id] = acc[order.id] ?? []
            acc[order.id].push(obj)
            return acc
          }, {})
          this.orderItemList = Object.values(groupByOrderId)
          this.orderItemList.reverse()
        })
    },
    orderCancel (orderId, orderItemId) {
      this.$axios.put('/api/orders/' + orderId, {
        orderItemId: orderItemId
      })
        .then((response) => {
          if (response.status === 200) {
            alert('주문이 취소되었습니다.')
            this.getOrderHistory()
          }
        })
    }
  }
}
</script>

<style scoped>
.top {
  text-align: center;
  margin-bottom: 0.6rem;
}

.container {
  margin-top: 1rem;
}

.containerTop > small {
  margin-left: 1rem;
}

.containerTop {
  margin-bottom: 0.6rem;
}

.containerTop > button {
  float: right;
  margin-right: 1rem;
  cursor: pointer;
}

.card {
  border: 1px solid black;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.cardBody > .orderStatus {
  display: block;
  margin-left: 1rem;
}
.cardBody> img {
  width: 5rem;
  object-fit: cover;
  margin-left: 0.6rem;
}

.orderInfo {
  margin-left: 1rem;
  display: inline-block;
}

.orderInfo >div {
  margin-top: 1.8rem;
  margin-bottom: 0.5rem;
}

.orderInfo > div > button {
  margin-left: 6.6rem;
  float: right;
}

.cardBody > .itemInfo > h5 {
  display: inline;
}

.cardFoot {
  text-align: center;
}
.cardFoot > button {
  width: 10rem;
  height: 1.5rem;
}
</style>
