<template>
  <nav>
    <div class="nav-left">
      <router-link to="/">Home</router-link>
    </div>
    <div class="nav-right">
      <router-link v-if="isAuthenticated" to="/order">Order</router-link>
      <router-link v-if="isAuthenticated" to="/forum">Forum</router-link>
      <router-link v-if="isAuthenticated" to="/user">User</router-link>
      <router-link v-if="!isAuthenticated" to="/login" class="login-button">Login</router-link>
      <button v-if="isAuthenticated" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    }
  },
  methods: {
    logout() {
      // Perform logout logic
      this.$store.commit('setAuthenticated', false); // Set isAuthenticated to false in Vuex store
      this.$router.push('/'); // Navigate to HomeView
    }
  }
}
</script>


<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  top: 0;
  /* Aligns the navbar at the top */
  background-color: #ffffff;
  /* Optional: ensures the navbar isn't transparent */
  z-index: 1000;
  /* High z-index to keep navbar above other content */
}


.nav-left,
.nav-right {
  display: flex;
}

.nav-right a {
  margin-left: 8px;
  /* Add spacing between links on the right */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  background-color: wheat;
  color: black;
  border-radius: 10px;
}

.login-button {
  background-color: wheat;
  border-radius: 10px;
  padding: 10px 15px;
  /* Slightly larger padding for a more button-like appearance */
}

a.login-button {
  color: black;
}
</style>