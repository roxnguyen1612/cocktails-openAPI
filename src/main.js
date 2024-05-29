import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';


const app = createApp(App);

// Register Navbar globally
app.component('Navbar', Navbar);
app.component('Footer', Footer);


app.use(router).mount('#app');
