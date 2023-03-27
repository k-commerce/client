<template>
  <main class="order">
    <AddressListModal v-if="addressListModal" @close="close" />

    <span>
      <span>주문 상품</span>
      <div v-for="orderItem in orderItemList" :key="orderItem">
        <img />
        <div>
          <div>{{ orderItem.name }}</div>
          <div>{{ orderItem.count }} 개</div>
          <div>{{ orderItem.price * orderItem.count }} 원</div>
        </div>
      </div>
    </span>

    <span>
      <span>배송 정보</span>
      <label><input type="checkbox" v-model="checked" @change="check"/>주문자와 동일</label>
      <input type="text" v-model="name" placeholder="받는 사람" @input="onChange()" />
      <input type="text" v-model="phoneNumber" placeholder="연락처" @input="onChange()" />
      <button @click="open">배송지 목록</button>
      <input type="text" placeholder="우편번호" readonly v-model="postcode" @click="findPostcode" />
      <input type="text" placeholder="도로명 주소 / 지번 주소" readonly v-model="selected" @click="findPostcode" />
      <input type="text" placeholder="상세 주소" v-model="detailed" />
    </span>
    <DaumPostcode ref="daumPostcode" @oncomplete="oncomplete" />

    <span>
      <span>결제 방식</span>
      <label><input type="radio" v-model="payment" value="CARD" />신용카드</label>
      <label><input type="radio" v-model="payment" value="DEPOSIT" />무통장입금</label>
    </span>

    <span>
      <span>결제 금액</span>
      <div>총 {{ totalPrice }} 원</div>
      <button @click="pay">결제하기</button>
    </span>
  </main>
</template>

<script>
import DaumPostcode from '@/components/DaumPostcode'
import AddressListModal from '@/components/AddressListModal'

export default {
  components: {
    DaumPostcode,
    AddressListModal
  },
  data () {
    return {
      addressListModal: false,
      postcode: '',
      selected: '',
      detailed: '',
      checked: false,
      name: '',
      phoneNumber: '',
      payment: '',
      orderCheck: [],
      orderItemList: [],
      totalPrice: 0,
      itemIdList: [],
      countList: [],
      totalPriceList: []
    }
  },
  created () {
    this.orderCheck = this.$store.getters.getOrderCheck
    this.getOrderItemList()
  },
  methods: {
    findPostcode () {
      this.$refs.daumPostcode.open()
    },
    oncomplete ({ postcode, selected }) {
      this.postcode = postcode
      this.selected = selected
    },
    open () {
      this.$refs.daumPostcode.close()
      this.addressListModal = true
    },
    close (address) {
      this.addressListModal = false
      if (address) {
        this.postcode = address.postcode
        this.selected = address.selected
        this.detailed = address.detailed
      }
    },
    getOrderItemList () {
      for (let i = 0; i < this.orderCheck.length; i++) {
        this.itemIdList.push(this.orderCheck[i].id)
        this.countList.push(this.orderCheck[i].count)
        this.totalPriceList.push(this.orderCheck[i].id * this.orderCheck[i].count)
      }
      this.$axios.get('/api/items', {
        params: {
          itemIds: this.itemIdList.join(',')
        }
      })
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            response.data[i].count = this.orderCheck[i].count
            this.orderItemList.push(response.data[i])
            this.totalPrice += response.data[i].price * response.data[i].count
          }
        })
    },
    onChange () {
      this.checked = false
    },
    pay () {
      this.$axios.post('/api/orders', {
        postcode: this.postcode,
        selected: this.selected,
        detailed: this.detailed,
        payment: this.payment,
        itemIdList: this.itemIdList,
        countList: this.countList,
        totalPriceList: this.totalPriceList,
        name: this.name,
        phoneNumber: this.phoneNumber
      })
        .then((response) => {
          if (response.status === 200) {
            alert('주문이 완료되었습니다.')
            this.$router.push('/')
          }
        })
    },
    check () {
      if (this.checked === true) {
        this.name = this.$store.getters.getPrincipal.name
        this.phoneNumber = this.$store.getters.getPrincipal.phoneNumber
      } else {
        this.name = ''
        this.phoneNumber = ''
      }
    }
  }
}
</script>

<style scoped>
.order {
  text-align: center;
}

.order > span {
  display: inline-block;
  width: 24rem;
  margin: 1rem 0;
  text-align: left;
}

.order > span > span {
  display: block;
  margin-bottom: 1rem;
}

.order > span > div {
  display: flex;
}

.order > span > div > img {
  width: 8rem;
  height: 8rem;
  margin-right: 1rem;
}

.order > span > label {
  margin: 0 1rem 0 0.2rem;
}

.order > span > input[type='text'] {
  width: 22rem;
  height: 3rem;
  padding: 0 1rem;
  border: 1px solid lightgray;
}

.order > span > button {
  width: 24rem;
  height: 3rem;
  margin-top: 1rem;
}
</style>
