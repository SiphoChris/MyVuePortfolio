<template>
    <nav class="container-fluid navigation">
      <h2 class="logo">{{ `${myFirstName} ${myLastName}` }}</h2>
      <button class="cta" @click.prevent>{{ cta }} <i class="bi bi-telephone-fill"></i></button>
    </nav>
  </template>
  
  <script>
  export default {
      data(){
          return {
              "myFirstName": "Sipho",
              "myLastName": "Nkebe",
              "cta": "Reach Me"
          }
      }
  };
  </script>
  
  <style src="../assets/css/style.css">
  </style>