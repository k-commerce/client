<template>
  <div class="addressListModal">
    <button @click="close(null)">직접 입력</button>

    <span v-for="address in addressList" :key="address">
      <span>{{ address.name }}</span>
      <div>{{ '(' + address.postcode + ') ' + address.selected + ' ' + address.detailed }}</div>
      <button @click="close(address)">선택</button>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addressList: [
        { id: 1, name: '집', postcode: '02005', selected: '서울특별시 중랑구 동일로163길 12-10', detailed: '505호' },
        { id: 2, name: '학교', postcode: '05006', selected: '서울특별시 광진구 능동로 209', detailed: '대양AI센터' },
        { id: 3, name: '직장', postcode: '05018', selected: '서울특별시 광진구 아차산로 225 2층', detailed: '설빙 건대지점' }
      ]
    }
  },
  methods: {
    close (address) {
      this.$emit('close', address)
    }
  }
}
</script>

<style scoped>
.addressListModal {
  overflow: auto;
  position: fixed;
  width: 27rem;
  height: 44rem;
  background-color: white;
}

.addressListModal > button {
  width: 24rem;
  height: 3rem;
  margin: 1rem 0;
}

.addressListModal > span {
  display: inline-block;
  width: 22rem;
  height: 10rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid lightgray;
  text-align: left;
}

.addressListModal > span > span {
  display: block;
  height: 2rem;
}

.addressListModal > span > div {
  height: 6rem;
}

.addressListModal > span > button {
  width: 6rem;
  height: 2rem;
}
</style>
