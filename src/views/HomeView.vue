<template>
  <div>
    <!-- Header with Navigation -->
    <div class="header">
      <div class="header-text">
        <h1>Welcome to our Cocktail Emporium</h1>
        <p>Discover a world of exquisite cocktails and unparalleled service at our Cocktail Emporium. Indulge in a curated selection of classic and innovative libations, expertly crafted by our skilled mixologists.</p>
        <router-link to="/order" class="header-button">Order Now</router-link>
        <router-link to="/forum" class="header-button-2">Explore Cocktails</router-link>
      </div>
    </div>

    <div class="order">
      <h1>How to Order from Our Website</h1>
      <p>Ordering from our Cocktail Emporium website is easy and convenient. Simply browse our Order tab, select your desired cocktails, and customize your order to your liking.</p>
      <ul>
        <li><span>Browse the Menu:</span> Explore our wide selection of classic and signature cocktails, each crafted with the finest ingredients.</li>
        <li><span>Customize Your Order:</span> Personalize your drinks by adjusting the alcohol content, sweetness, or even adding a special garnish.</li>
        <li><span>Add to Cart:</span> Review your order, add any additional items, and complete your purchase using our safe and reliable payment options.</li>
      </ul>
    </div>

    <!-- Main Section with Flex-boxes -->
    <div class="search-info">
      <div class="search-info-text">
        <h1>Search recipes</h1>
        <p>You can just simply click on the Forum button on Navbar, or the Explore
          Cocktails button. After that, put the name of your desired cocktails, it will
          return you all the ingredients and how to make that cocktails for you
        </p>
      </div>
      <div class="search-info-text">
        <h1>Order Cocktails</h1>
        <p>Simply click on Order to see a list of available cocktails for you, including price and ingredients
        </p>
      </div>
      <div class="search-info-text">
        <h1>Become a member</h1>
        <p>Click on the Login/ Register to be able to order cocktails from us!
        </p>
      </div>
      <div class="search-info-text">
        <h1>Search by Ingredient</h1>
        <p>Discover new cocktail recipes based on your favorite liquors, fruits, or herbs. Our comprehensive database allows you to find the perfect drink to suit your mood and taste preferences.</p>
      </div>
      <div class="search-info-text">
        <h1>Browse by Flavor </h1>
        <p>Explore cocktails organized by flavor profiles such as sweet, sour, bitter, or aromatic. Find the perfect balance of flavors to tantalize your palate.</p>
      </div>
      <div class="search-info-text">
        <h1>Cocktail Inspiration</h1>
        <p>Let our curated selection of classic and contemporary cocktail recipes inspire your next mixology adventure. Expand your horizons and try new and exciting flavor combinations.</p>
      </div>
    </div>

  </div>

</template>

<script>


export default {
}
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  /* Full width */
  height: 40vh;/* Adjust based on navbar height */
  text-align: left;/* Text alignment for h1 and p */
  color: white;
  background-image: url('@/assets/heading-bckgr.jpg');
  background-size: cover;
  background-position: center;
  padding: 0 10px; /* Adds padding on the left and right */
}



.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);/* Semi-transparent black overlay */
  backdrop-filter: blur(5px);/* Blur effect for background elements */
  z-index: 0;/* Keeps it below the text content */
}



.header-text{
  position: absolute;
  left: 50%;/* Center horizontally */
  top: 50%;/* Center vertically */
  transform: translate(-50%, -50%);/* Adjust position to truly center */
  width: auto;/* Width auto to fit content */
  margin: 0; /* No margin to avoid disrupting centering */
  z-index: 1;/* Above the overlay */
}

.header h1{
  font-size: 5vh;  
}

.header-text p{
  padding-bottom: 20px;
}

.header-button{
  background-color: wheat;
  border-radius: 10px;
  padding: 15px 15px; /* Slightly larger padding for a more button-like appearance */
  margin-right: 10px;
}

.header-button-2{
  background-color: black;
  border: 1px wheat solid;
  border-radius: 10px;
  padding: 15px 15px;
  margin-right: 10px;
  color:wheat;
  text-decoration: none;
}

a.header-button{
  color:black;
  font-weight: bold;
  text-decoration: none;
}

.search-info {
  display: flex;
  justify-content: space-around;
  background-color: wheat;
  padding: 10vh 20vh;
  flex-wrap: wrap;
}

.search-info-text {
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.search-info h1 {
  margin-top: 0;
}

.search-info p {
  margin-bottom: 0;
  text-align: left;
}

.order {
  height: 30vh;
  margin: 0px 100px; /* Center horizontally */
  padding: 20px 50px; /* Specific padding */
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left; /* Align text to the left */
}

.order h1, .order p {
  margin: 0; /* Remove default margins */
  text-align: left; /* Align text to the left */
}

.order ul {
  list-style-type: decimal; /* Change bullet points to numbers */
  padding-left: 50px; /* Add padding to the left for indentation */
  margin: 0; /* Remove default margins */
}

.order ul li span {
  font-weight: bold;
  color: rgb(206, 177, 123);
}

.order h1, .order p, .order li {
  padding: 10px;
}
</style>
