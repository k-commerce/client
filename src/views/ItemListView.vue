<template>
  <main class="item">
    <div class="top">Category</div>
    <ul>
      <li>Category 1-1</li>
      <li>Category 1-2</li>
      <li>Category 1-3</li>
    </ul>
    <div class="container">
      <div class="card">
        <img src="@/assets/images/git.png" alt="">
        <div>
          <h5>상품명</h5>
          <p>상품설명상품설명상품설명상품설명상품설명상품설명</p>
          <p>가격</p>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/inte.png" alt="">
        <div>
          <h5>상품명</h5>
          <p>상품설명상품설명상품설명상품설명상품설명상품설명</p>
          <p>가격</p>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/vs.png" alt="">
        <div>
          <h5>상품명</h5>
          <p>상품설명상품설명상품설명상품설명상품설명상품설명</p>
          <p>가격</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.top {
  text-align: center;
  margin-bottom: 0.8rem;
}

.item > ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.item > ul > li {
  border: 1px solid #ddd;
  margin-top: -1px;
  background-color: #f6f6f6;
  padding: 0.8rem;
  cursor: pointer;
  text-align: center;
}
.item > ul > li:hover {
  background-color: aliceblue;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.card {
  margin: 0.8rem;
}

.card > img {
  width: 10rem;
  object-fit: cover;
  display: block;
  margin: auto;
}

.card > div > h5 {
  margin: 0.5rem;
}
</style>
