<template>
  <h3>Work Experiences</h3>
    <div class="container my-5" data-aos="zoom-in-down">
      <div class="row my-5">
        <div id="experience">
      <h3>{{ experiences.companyName }}</h3>
      <p>{{ experiences.jobTitle }}</p>
      <p>{{ experiences.duration }}</p>
      <h4>Responsibilities</h4>
      <ul>
        <li v-for="duty in experiences.duties" :key="duty">{{ duty }}</li>
      </ul>
    </div>
      </div>
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

  <style scoped>
  .container{
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.3);
    background-color: #fff;
  }
  </style>