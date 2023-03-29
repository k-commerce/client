<template>
  <main class="orderHistory">
    <OrderDetailsModal v-if="order" @close="close" :order="order" />

    <span v-for="order in orderHistory" :key="order">
      <span>
        <span>{{ order[0].order.createdDate.substring(0, 10) }}</span>
        <button @click="open(order)">주문 상세보기 ></button>
      </span>

      <div v-for="orderItem in order" :key="orderItem">
        <div>{{ orderItem.status === 'CANCEL' ? '주문 취소' : '주문 완료' }}</div>
        <span>
          <img src="@/assets/images/git.png" />
          <span>
            <div>{{ orderItem.item.name }}</div>
            <div>{{ orderItem.orderPrice / orderItem.quantity }}원 X {{ orderItem.quantity }}개</div>
            <div>총 {{ orderItem.orderPrice }}원</div>
          </span>
        </span>
        <button v-if="orderItem.status !== 'CANCEL'" @click="cancelOrderItem(orderItem)">주문 취소</button>
      </div>
    </span>
  </main>
</template>

<script>
import OrderDetailsModal from '@/components/OrderDetailsModal'

export default {
  components: {
    OrderDetailsModal
  },
  data () {
    return {
      orderHistory: [],
      order: null
    }
  },
  methods: {
    getOrderHistory () {
      this.$axios.get('/api/orders')
        .then(response => {
          if (response.status === 200) {
            this.orderHistory = this.groupByOrderId(response.data)
          }
        })
    },
    groupByOrderId (orderHistory) {
      let groupByOrderId = orderHistory.reduce((acc, obj) => {
        const { order } = obj
        acc[order.id] = acc[order.id] ?? []
        acc[order.id].push(obj)
        return acc
      }, {})
      groupByOrderId = Object.values(groupByOrderId)
      groupByOrderId.reverse()
      return groupByOrderId
    },
    cancelOrderItem (orderItem) {
      const orderId = orderItem.order.id
      const orderItemId = orderItem.id
      this.$axios.put('/api/orders/' + orderId, {
        id: orderItemId
      }).then(response => {
        if (response.status === 200) {
          alert('주문이 취소되었습니다.')
          this.getOrderHistory()
        }
      })
    },
    open (order) {
      this.order = order
    },
    close () {
      this.order = null
    }
  },
  created () {
    this.getOrderHistory()
  }
}
</script>

<style scoped>
.orderHistory > span {
  display: block;
  padding: 1rem;
  border-top: 1px solid #ddd;
}

.orderHistory > span > span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.orderHistory > span > span > button {
  width: 8rem;
  height: 2rem;
}

.orderHistory > span > div {
  margin: 1rem 0 0 0;
  padding: 1rem;
  border: 1px solid black;
}

.orderHistory > span > div > span {
  display: flex;
  margin: 1rem 0;
}

.orderHistory > span > div > span > img {
  width: 6rem;
  height: 6rem;
  margin: 0 2rem 0 0;
}

.orderHistory > span > div > button {
  display: block;
  width: 6rem;
  height: 2rem;
  margin: 0 auto;
}
</style>
