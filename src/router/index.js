import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderView from '../views/OrderView.vue'
import ForumView from '../views/ForumView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'


const routes = [
  { path: '/', name: 'Home', component: HomeView},
  { path: '/forum', name: 'Forum', component: ForumView},
  { path: '/order', name: 'Order', component: OrderView},
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/signup', name: 'SignUp', component: SignUpView }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
