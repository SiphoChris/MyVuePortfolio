<template>
    <footer class="container-fluid mt-5 py-5">
      <div class="row">
        <p>
          &copy; {{ copyRights }} : <span>{{ getCurrentYear }}</span>
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        copyRights: "Copyrights Reserved",
      };
    },
    computed: {
      getCurrentYear(){
        return new Date().getUTCFullYear()
      }
    }
  };
  </script>
  <style src="../assets/css/style.css"></style>
  