<template>
  <div class="order">
    <form @submit.prevent="fetchDrinks" class="search-order">
      <input class="search-order-input" type="text" placeholder="Search available cocktails" v-model="searchTerm">
      <button   type="submit">Search</button>
    </form>
    <div v-if="loading">Loading...</div>
    <div v-if="error">An error occurred: {{ error.message }}</div>
    <div class="drinks-container" v-else>
      <div class="drink-card" v-for="drink in paginatedDrinks" :key="drink.idDrink">
        <h3>{{ drink.strDrink }}</h3>
        <p>Category: {{ drink.strCategory }}</p>
        <img :src="drink.strDrinkThumb" :alt="`Image of ${drink.strDrink}`" />
        <p>Price: $22</p>
        <button @click="addToCart">Buy</button>
      </div>
    </div>
    <div class="navi-btn">
      <button @click="previousPage">Previous</button>
      <button @click="nextPage">Next</button>
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
      searchTerm: 'm',  // Initialize the searchTerm
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
          this.drinks = response.data.drinks || [];  // Handle null response gracefully
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
    addToCart() {
      this.cartCount += 1;
      alert(`You have: ${this.cartCount} items in the cart`);
    }
  },
  computed: {
    paginatedDrinks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.drinks.slice(start, start + this.itemsPerPage);
    }
  }
}
</script>


<style scoped>
.order {
  display: flex;
  flex-wrap: wrap;
  align-items: center;  /* Center vertically */
  justify-content: center;  /* Center horizontally */
  background-color: wheat;
  height: 100%;  /* Full viewport height */
  width: 100%;
  padding: 20px;  /* Add padding to ensure content is not flush against the edges */
}

.drinks-container {
  height: 10%;
  width: 80%;  /* Adjust based on your layout needs */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.drink-card {
  background-color: white;
  flex: 0 1 22%;  /* Reduce the size to make each card smaller */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;  /* You can adjust margin as needed */
  padding: 15px;  /* Adjust padding to reduce overall size */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.drink-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.drink-card img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}

.navi-btn{
  width:100%;
}

.search-order {
  width:100%;
}

.search-order-input{
  width:30%;
  padding: 10px 20px;
  margin: 5px;
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
