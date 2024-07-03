<template>
    <div>
      <div v-for="education in education" :key="education.id">
        <p>{{ education.year }}: {{ education.description }} at {{ education.place }}</p>
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