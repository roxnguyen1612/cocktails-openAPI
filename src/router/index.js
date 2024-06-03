import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderView from '../views/OrderView.vue'
import ForumView from '../views/ForumView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import UserView from '../views/UserView.vue'
import store from '../store/store' // Import the Vuex store

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/forum', name: 'Forum', component: ForumView, meta: { requiresAuth: true } },
  { path: '/order', name: 'Order', component: OrderView, meta: { requiresAuth: true } }, 
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/signup', name: 'SignUp', component: SignUpView },
  { path: '/user', name: 'User', component: UserView, meta: { requiresAuth: true } } 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Add navigation guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // This route requires authentication
    if (!store.state.isAuthenticated) {
      // Redirect to the login page
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
