<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <div class="form-container">
      <div class="form-group">
        <label for="username">Your name:</label>
        <textarea id="username" v-model="username"></textarea>
      </div>
      <div class="form-group">
        <label for="bio">Biography:</label>
        <textarea id="bio" v-model="bio"></textarea>
      </div>
    </div>
    <button @click="updateProfile">Update Profile</button>
    <p v-if="updateSuccess">Update successful!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'JohnDoe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      updateSuccess: false
    };
  },
  methods: {
    updateProfile() {
      // Simulate updating the username and bio (replace with actual logic)
      // For demonstration purposes, we'll just log the updated values
      console.log('Updated Username:', this.username);
      console.log('Updated Bio:', this.bio);

      // Show update success message
      this.updateSuccess = true;

      // Clear success message after 2 seconds
      setTimeout(() => {
        this.updateSuccess = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
.user-profile {
  background-color: wheat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.form-container {
  width:50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
}

.form-group label {
  font-weight: bold;
}

.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 8px 16px;
  background-color: #044c34;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #086848;
}

p {
  margin-top: 10px;
}
</style>
