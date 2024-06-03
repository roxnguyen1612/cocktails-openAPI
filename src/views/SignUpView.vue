<template>
  <div class="signup-view">
    <form @submit.prevent="handleSignup" class="signup-form">
      <h2>Sign Up</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required>
      </div>
      <div v-if="messages.length > 0" class="error-message" style="color:red;">
          <p v-for="msg in messages" :key="msg">{{ msg }}</p>
      </div>
      <div class="button-container">
        <button type="submit">Sign Up</button>
        <router-link to="/login"><button type="button">Login</button></router-link>
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
      confirmPassword: '',
      messages: []
    };
  },
  methods: {
    handleSignup() {
      this.messages = []; // Clear previous messages

    if (!this.username || !this.password || !this.confirmPassword) {
      this.messages.push('Missing inputs');
    }

    if (this.password !== this.confirmPassword) {
      this.messages.push('Passwords do not match');
    }

    if (this.password.length < 8) {
      this.messages.push('Password must be at least 8 characters long');
    }

    if (!this.username.match(/^[a-zA-Z0-9]+$/)) {
      this.messages.push('Username must contain only alphanumeric characters');
    }

    if (this.username.length > 10) {
      this.messages.push('Username must be less than 10 characters');
    }

    if (this.messages.length === 0) {
      //API calls
      axios.post('http://localhost:3000/signup', {
        //axios.post('https://rdsbackend1612-9695fc0c30bf.herokuapp.com/signup', {
        username: this.username,
        password: this.password
      })
        .then(response => {
          this.message = response.data.message;
          this.$router.push('/login');
        })
        .catch(error => {
          console.error(error);
          this.message = error;
        });

    }
    },
    handleCancel() {
      // Handle cancel logic, such as clearing the form or redirecting
      this.username = '';
      this.password = '';
      this.confirmPassword = '';
    }
  }
}
</script>

<style scoped>
.signup-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: wheat;
}

.signup-form {
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
}

button {
  flex: 1;
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
}
</style>