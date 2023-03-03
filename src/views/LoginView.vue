<template>
  <main class="login">
    <input type="text" placeholder="아이디" />
    <input type="password" placeholder="비밀번호" />
    <button>로그인</button>
    <hr />
    <button>회원가입</button>
  </main>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login > input {
  width: 15rem;
  height: 3rem;
  margin: 1rem 0;
  padding: 0 1rem;
  border: 1px solid lightgray;
}

.login > button {
  width: 15rem;
  height: 3rem;
  margin: 1rem 0;
}

.login > hr {
  width: 18rem;
  height: 1px;
  border: none;
  background-color: lightgray;
}
</style>
