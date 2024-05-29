<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@cocktailemporium.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Cocktail Street, Beverage City, BC 12345</p>
        </div>
        <div class="footer-section">
          <h2>Follow Us</h2>
          <div class="social-media">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Cocktail Emporium. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  h2 {
    color:rgb(206, 177, 123);
  }
  .footer {
    background-color: white;
    color: black;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  
  .footer-section {
    margin: 10px;
    padding: 10px;
    flex: 1;
    min-width: 200px;
  }
  
  .footer-section h2 {
    margin-bottom: 10px;
  }
  
  .footer-section p, .footer-section a {
    margin: 5px 0;
  }
  
  .footer-bottom {
    margin-top: 20px;
  }
  </style>
  