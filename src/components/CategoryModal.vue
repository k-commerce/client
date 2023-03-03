<template>
  <div class="categoryModal">
    <ul class="parentCategory">
      <li @click="openChildCategory1">
        Category 1<i class="fas fa-caret-down fa-lg"></i>
      </li>
      <ul class="childCategory" v-if="childCategory1Val">
        <li>Category 1-1</li>
        <li>Category 1-2</li>
        <li>Category 1-3</li>
      </ul>
      <li @click="openChildCategory2">
        Category 2<i class="fas fa-caret-down fa-lg"></i>
      </li>
      <ul class="childCategory" v-if="childCategory2Val">
        <li>Category 2-1</li>
        <li>Category 2-2</li>
        <li>Category 2-3</li>
      </ul>
      <li @click="openChildCategory3">
        Category 3<i class="fas fa-caret-down fa-lg"></i>
      </li>
      <ul class="childCategory" v-if="childCategory3Val">
        <li>Category 3-1</li>
        <li>Category 3-2</li>
        <li>Category 3-3</li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      childCategory1Val: false,
      childCategory2Val: false,
      childCategory3Val: false
    }
  },
  methods: {
    openChildCategory1 () {
      if (this.childCategory1Val === false) {
        this.childCategory1Val = true
      } else {
        this.childCategory1Val = false
      }
    },
    openChildCategory2 () {
      if (this.childCategory2Val === false) {
        this.childCategory2Val = true
      } else {
        this.childCategory2Val = false
      }
    },
    openChildCategory3 () {
      if (this.childCategory3Val === false) {
        this.childCategory3Val = true
      } else {
        this.childCategory3Val = false
      }
    }
  }
}
</script>

<style scoped>
.categoryModal {
  width: 27rem;
  height: 44rem;
  background-color: #f6f6f6;
  position: fixed;
}

.parentCategory {
  list-style-type: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.parentCategory:hover {
  background-color: aliceblue;
}

.parentCategory > li {
  border: 1px solid #ddd;
  margin-top: -1px;
  background-color: #f6f6f6;
  padding: 12px;
  cursor: pointer;
}
.parentCategory > li:hover {
  background-color: aliceblue;
}

.parentCategory > li > i {
  float: right;
}

.childCategory {
  list-style-type: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.childCategory:hover {
  background-color: aliceblue;
}

.childCategory > li {
  border: 1px solid #ddd;
  margin-top: -1px;
  background-color: white;
  padding: 12px;
  cursor: pointer;
}
.childCategory > li:hover {
  background-color: aliceblue;
}
</style>
