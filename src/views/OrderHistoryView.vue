<template>
  <main class="orderHistory">
    <div class="top">주문 목록</div>
    <hr>
    <div class="container">
      <div class="containerTop">
        <small>2023.03.06</small>
        <button>주문 상세보기 ></button>
      </div>
      <div class="containerBody">
        <div class="card">
          <div class="cardBody">
            <!-- <span class="orderState">주문 상태</span> -->
            <img src="@/assets/images/git.png" alt="">
            <span class="orderInfo">
              <strong>상품명</strong>
              <div>
                <span>가격 / 수량</span>
                <button>장바구니</button>
              </div>
            </span>
          </div>
          <div class="cardFoot">
            <button>주문 취소 / 반품</button>
          </div>
        </div>

        <div class="card">
          <div class="cardBody">
            <img src="@/assets/images/git.png" alt="">
            <span class="orderInfo">
              <strong>상품명</strong>
              <div>
                <span>가격 / 수량</span>
                <button>장바구니</button>
              </div>
            </span>
          </div>
          <div class="cardFoot">
            <button>주문 취소 / 반품</button>
          </div>
        </div>
      </div>
      <hr>
    </div>

    <div class="container">
      <div class="containerTop">
        <small>2023.03.06</small>
        <button>주문 상세보기 ></button>
      </div>
      <div class="containerBody">
        <div class="card">
          <div class="cardBody">
            <img src="@/assets/images/git.png" alt="">
            <span class="orderInfo">
              <strong>상품명</strong>
              <div>
                <span>가격 / 수량</span>
                <button>장바구니</button>
              </div>
            </span>
          </div>
          <div class="cardFoot">
            <button>주문 취소 / 반품</button>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
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

/* .cardBody > .orderState {
  display: block;
  margin-left: 1rem;
} */
.cardBody> img {
  width: 5rem;
  object-fit: cover;
  margin-left: 0.6rem;
}

.orderInfo {
  margin-left: 2rem;
  display: inline-block;
}

.orderInfo >div {
  margin-top: 1.8rem;
  margin-bottom: 0.5rem;
}

.orderInfo > div > button {
  margin-left: 8rem;
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
