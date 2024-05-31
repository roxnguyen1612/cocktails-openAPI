<template>
  <div class="login-view">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="button-container">
        <button type="submit" class="login-button">Login</button>
        <router-link to="/signup"><button type="button" class="signup-button">Sign Up</button></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      message: ''
    };
  },
  methods: {
    handleLogin() { //call to backend
      axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.request.responseURL.includes('/')) {
            this.$store.commit('setAuthenticated', true); // Set isAuthenticated to true in Vuex store
            // Redirect to /order
            this.$router.push('/order');
            
          } else {
            this.message = response.data.message;
            alert(this.message);
          }
        })
        .catch(error => {
          console.error(error);
          this.message = 'An error occurred. Please try again.';
        });
    }
  }

}
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: wheat;
}

.login-form {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
  /* Ensures labels and inputs are aligned to the left */
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  /* Distributes space evenly between the buttons */
}

button {
  flex: 1;
  /* Makes both buttons equal width */
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  color: white;
  background-color: #044c34;
  margin-left: 5px;
}

button:hover {
  background-color: #086848;
}

button:first-child {
  margin-left: 0;
  /* Removes left margin from the first button */
}
</style>