import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JoinView from '../views/JoinView.vue'
import LoginView from '../views/LoginView.vue'
import AddressListView from '../views/AddressListView.vue'
import OrderView from '../views/OrderView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/join', name: 'join', component: JoinView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/addresses', name: 'addressList', component: AddressListView },
  { path: '/order', name: 'order', component: OrderView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
