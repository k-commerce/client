import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JoinView from '../views/JoinView.vue'
import LoginView from '../views/LoginView.vue'
import ItemListView from '../views/ItemListView.vue'
import ItemView from '../views/ItemView.vue'
import OrderHistoryView from '../views/OrderHistoryView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/join', name: 'join', component: JoinView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/items', name: 'itemList', component: ItemListView },
  { path: '/item', name: 'item', component: ItemView },
  { path: '/orderhistory', name: 'orderHistory', component: OrderHistoryView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
