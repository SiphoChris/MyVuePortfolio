<template>
    <div>
        <img src="https://siphochris.github.io/images/images/portfolio_images/profile.png" alt="profile image">
      <h2 class="logo">{{ `${myFirstName} ${myLastName}` }}</h2>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return {
              "myFirstName": "Sipho",
              "myLastName": "Nkebe",
          }
      }
  };
  </script>
  
  <style src="../assets/css/style.css">
  </style>