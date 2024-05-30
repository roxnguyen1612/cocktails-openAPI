<template>
  <div class="forum">
    <h1>Learn how to make cocktails here!</h1>
    <form @submit.prevent="fetchDrinks">
      <input class="search-forum" type="text" placeholder="Search how to make cocktails" v-model="searchTerm">
      <button type="submit" class="search-button">Search</button>
    </form>
    <div v-if="loading">Loading...</div>
    <div v-if="error">An error occurred: {{ error.message }}</div>
    <div class="posts-container" v-else>
      <!-- Heading of the post -->
      <div v-for="drink in paginatedDrinks" :key="drink.idDrink" class="post" @click="toggleDetail(drink.idDrink)">
        <h3>{{ drink.strDrink }}</h3>
        <h5>{{ drink.strCategory }}</h5>
        <div v-if="detailId === drink.idDrink" class="details">
          <p>Glass: {{ drink.strGlass }}</p>
          <p>Instruction: {{ drink.strInstructions }}</p>
        </div>
      </div>
    </div>
    <div class="navi-btn">
      <button @click="previousPage" class="pagination-button">Previous</button>
      <button @click="nextPage" class="pagination-button">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      drinks: [],
      loading: true,
      error: null,
      currentPage: 1,
      itemsPerPage: 6,
      searchTerm: '',
      detailId: null,
      cartCount: 0
    };
  },
  created() {
    this.fetchDrinks();
  },
  methods: {
    fetchDrinks() {
      const query = this.searchTerm.trim();
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
      this.loading = true;
      axios.get(url)
        .then(response => {
          this.drinks = response.data.drinks || [];
          this.loading = false;
          this.currentPage = 1;  // Reset to first page with new search results
        })
        .catch(error => {
          this.error = error;
          this.loading = false;
        });
    },
    nextPage() {
      if ((this.currentPage * this.itemsPerPage) < this.drinks.length) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    toggleDetail(id) {
      this.detailId = this.detailId === id ? null : id;
    }
  },
  computed: {
    paginatedDrinks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.drinks.slice(start, end);
    }
  }
}
</script>



<style>
.forum {
  height: 100vh;
  background-color: wheat;
  padding-top:10vh;
}

.posts-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.post {
  width:50%;
  cursor: pointer;
  border: 1px solid grey;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.post:hover {
  background-color: #559781;
}

.details {
  text-align: left;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffffff;
  border-top: 1px solid #eee;
}

.post h3,
.post h5 {
  margin: 0;
  /* Removes default margin to tighten layout */
}

.search-forum{
  width:30%;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 10px;
}
/* General button styling */
button {
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #0a6b4b;  /* A nice blue shade */
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #044c34;  /* A darker shade of blue on hover */
}

button:focus {
  outline: none;  /* Removes the default focus outline */
}
</style>