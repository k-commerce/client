<template>
  <main class="order">
    <AddressListModal v-if="addressListModal" @close="close" />

    <span>
      <span>주문 상품</span>
      <div v-for="orderItem in orderItemList" :key="orderItem">
        <img />
        <div>
          <div>{{ orderItem.name }}</div>
          <div>{{ orderItem.count }}개</div>
          <div>{{ orderItem.orderPrice }}원</div>
        </div>
      </div>
    </span>

    <span>
      <span>배송 정보</span>
      <label><input type="checkbox" />주문자와 동일</label>
      <input type="text" placeholder="받는 사람" />
      <input type="text" placeholder="연락처" />
      <button @click="open">배송지 목록</button>
      <input type="text" placeholder="우편번호" readonly v-model="postcode" @click="findPostcode" />
      <input type="text" placeholder="도로명 주소 / 지번 주소" readonly v-model="selected" @click="findPostcode" />
      <input type="text" placeholder="상세 주소" v-model="detailed" />
    </span>
    <DaumPostcode ref="daumPostcode" @oncomplete="oncomplete" />

    <span>
      <span>결제 방식</span>
      <label><input type="radio" name="payment" />신용카드</label>
      <label><input type="radio" name="payment" />무통장입금</label>
    </span>

    <span>
      <span>결제 금액</span>
      <div>총 90000원</div>
      <button>결제하기</button>
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
      orderItemList: [
        { name: '퀄팅 자켓', count: 1, orderPrice: 50000 },
        { name: '트레이닝 팬츠', count: 2, orderPrice: 40000 }
      ],
      postcode: '',
      selected: '',
      detailed: ''
    }
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
