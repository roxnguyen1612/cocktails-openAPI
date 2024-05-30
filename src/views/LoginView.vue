<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await fetch('/api_user.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password
            })
          });
          const data = await response.json();
          if (response.ok) {
            // Assume user authentication was successful and redirect to the dashboard
            this.$emit('authenticated', true);
            this.$router.replace({ name: 'Home' });
          } else {
            this.errorMessage = data.message || 'Login failed';
          }
        } catch (error) {
          console.error('Error during login:', error);
          this.errorMessage = 'An error occurred during login';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  