<template>
    <div class="container">
      <div class="row">
        <h3 class="mb-4">Education</h3>
      <div id="education">
      <div v-for="education in education" :key="education.id">
        <h4 class="mb-4">{{ education.year }}: {{ education.description }} at {{ education.place }}</h4>
      </div>
    </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'EducationComp',
    computed: {
      ...mapState(['education']),
    },
  };
  </script>
  <style scoped>
  .row{
    margin: 6rem 0;
  }
  </style>
