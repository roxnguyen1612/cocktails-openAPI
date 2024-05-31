import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import store from './store/store'; // Import the Vuex store

const app = createApp(App);

// Register Navbar globally
app.component('Navbar', Navbar);
app.component('Footer', Footer);

app.use(store);

app.use(router).mount('#app');
