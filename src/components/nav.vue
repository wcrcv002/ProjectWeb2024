<!-- Navbar.vue -->

<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <div class="hello">
      <h1>{{ msg }}</h1>
      <br>
      <div id="content">
        <h3 v-if="isAdmin">
          <h2 v-if="isSignIn">สวัสดีอาจารย์: {{ user }}</h2>
          <Teacher />
        </h3>
        <p v-else>
          <h2 v-if="isSignIn">สวัสดีคุณ: {{ user }}</h2>
          <Student />
        </p>
      </div>
      <br>
    </div>
      </ul>
    </nav>
  </template>
  
  <script setup>
  // You can add any necessary logic or data for your navbar here
  </script>
  
  <style scoped>
  nav {
    background-color: #333; /* Background color for the navbar */
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex; /* Make the list items display horizontally */
  }
  
  li {
    padding: 10px 20px; /* Adjust spacing as needed */
  }
  
  a {
    color: white; /* Color for the link text */
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline; /* Underline the link text on hover */
  }
  </style>
  