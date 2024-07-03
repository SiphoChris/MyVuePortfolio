<template>
    <div>
      <h3>{{ experiences.companyName }}</h3>
      <p>{{ experiences.jobTitle }}</p>
      <p>{{ experiences.duration }}</p>
      <ul>
        <li v-for="duty in experiences.duties" :key="duty">{{ duty }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'ExperiencesComp',
    computed: {
      ...mapState(['experiences']),
    },
  };
  </script>