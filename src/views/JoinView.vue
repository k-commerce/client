<template>
  <main class="join">
    <input type="text" placeholder="아이디" />
    <input type="password" placeholder="비밀번호" />
    <input type="password" placeholder="비밀번호 확인" />
    <input type="text" placeholder="이름" />
    <input type="text" placeholder="휴대전화번호" />
    <button>회원가입</button>
  </main>
</template>

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
