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
        <div class="button-container">
          <button type="submit" class="signup-button">Sign Up</button>
          <button type="button" @click="handleCancel" class="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSignup() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        // Handle signup logic here
        alert('Signup successful');
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
    background-color: #3498db;
    margin-left: 5px;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  
  .signup-button {
    background-color: #2ecc71;
  }
  
  .signup-button:hover {
    background-color: #27ae60;
  }
  
  .cancel-button {
    background-color: #e74c3c;
  }
  
  .cancel-button:hover {
    background-color: #c0392b;
  }
  
  button:first-child {
    margin-left: 0;
  }
  </style>
  