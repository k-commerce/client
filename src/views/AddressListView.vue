<template>
  <main class="addressList">
    <AddressModal v-if="addressModal" :address="address" @close="close" />

    <button @click="open(null)">배송지 추가</button>

    <span v-for="address in addressList" :key="address">
      <span>{{ address.name }}</span>
      <div>{{ '(' + address.postcode + ') ' + address.selected + ' ' + address.detailed }}</div>
      <span>
        <button @click="open(address)">수정</button>
        <button>삭제</button>
      </span>
    </span>
  </main>
</template>

<script>
import AddressModal from '@/components/AddressModal'

export default {
  components: {
    AddressModal
  },
  data () {
    return {
      addressModal: false,
      address: null,
      addressList: [
        { id: 1, name: '집', postcode: '02005', selected: '서울특별시 중랑구 동일로163길 12-10', detailed: '505호' },
        { id: 2, name: '학교', postcode: '05006', selected: '서울특별시 광진구 능동로 209', detailed: '대양AI센터' },
        { id: 3, name: '직장', postcode: '05018', selected: '서울특별시 광진구 아차산로 225 2층', detailed: '설빙 건대지점' }
      ]
    }
  },
  methods: {
    open (address) {
      this.addressModal = true
      this.address = address
    },
    close () {
      this.addressModal = false
    }
  }
}
</script>

<style scoped>
.addressList {
  text-align: center;
}

.addressList > button {
  width: 24rem;
  height: 3rem;
  margin: 1rem 0;
}

.addressList > span {
  display: inline-block;
  width: 22rem;
  height: 10rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid lightgray;
  text-align: left;
}

.addressList > span > span {
  display: flex;
  justify-content: space-between;
  height: 2rem;
}

.addressList > span > div {
  height: 6rem;
}

.addressList > span > span > button {
  width: 6rem;
}
</style>
