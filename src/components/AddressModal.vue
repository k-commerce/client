<template>
  <div class="addressModal">
    <input type="text" placeholder="배송지 이름" v-model="name" />
    <input type="text" placeholder="우편번호" readonly v-model="postcode" @click="findPostcode" />
    <input type="text" placeholder="도로명 주소 / 지번 주소" readonly v-model="selected" @click="findPostcode" />
    <input type="text" placeholder="상세 주소" v-model="detailed" />

    <span>
      <button v-if="address">수정</button>
      <button v-else>추가</button>
      <button @click="close">취소</button>
    </span>

    <DaumPostcode ref="daumPostcode" @oncomplete="oncomplete" />
  </div>
</template>

<script>
import DaumPostcode from '@/components/DaumPostcode'

export default {
  components: {
    DaumPostcode
  },
  props: {
    address: Object
  },
  data () {
    return {
      id: null,
      name: '',
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
    close () {
      this.$emit('close')
    }
  },
  created () {
    if (this.address) {
      this.id = this.address.id
      this.name = this.address.name
      this.postcode = this.address.postcode
      this.selected = this.address.selected
      this.detailed = this.address.detailed
    }
  }
}
</script>

<style scoped>
.addressModal {
  position: fixed;
  width: 27rem;
  height: 44rem;
  background-color: white;
}

.addressModal > input {
  width: 22rem;
  height: 3rem;
  padding: 0 1rem;
  border: 1px solid lightgray;
}

.addressModal > input:first-child {
  margin-top: 1rem;
}

.addressModal > span {
  display: inline-flex;
  justify-content: space-between;
  width: 24rem;
  margin: 1rem 0;
}

.addressModal > span > button {
  width: 6rem;
  height: 3rem;
}
</style>
