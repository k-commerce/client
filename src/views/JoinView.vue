<template>
  <main class="join">
    <input type="text" placeholder="아이디" v-model="username" />
    <input type="password" placeholder="비밀번호" v-model="password" />
    <input type="password" placeholder="비밀번호 확인" v-model="confirm" />
    <input type="text" placeholder="이름" v-model="name" />
    <input type="text" placeholder="휴대전화번호" v-model="phoneNumber" />
    <button @click="join">회원가입</button>
  </main>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      confirm: '',
      name: '',
      phoneNumber: ''
    }
  },
  methods: {
    join () {
      this.$axios.post('/api/members', {
        username: this.username,
        password: this.password,
        name: this.name,
        phoneNumber: this.phoneNumber
      }).then(response => {
        if (response.status === 200) {
          alert('회원가입이 완료되었습니다.')
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style scoped>
.join {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.join > input {
  width: 15rem;
  height: 3rem;
  margin: 1rem 0;
  padding: 0 1rem;
  border: 1px solid lightgray;
}

.join > button {
  width: 15rem;
  height: 3rem;
  margin: 1rem 0;
}
</style>
