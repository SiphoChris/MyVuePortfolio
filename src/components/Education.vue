<template>
    <div class="container">
      <div class="row">
        <h3 class="mb-4">Education</h3>
      <div id="education">
      <div v-for="education in education" :key="education.id">
        <div class="year-container m-auto">
          <h4>{{ education.year }}</h4>
        </div>
        <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/long-arrow-down.png" alt="long-arrow-down" class="mb-4"/>
        <h4 class="mb-4">{{ education.description }} at {{ education.place }}</h4>
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
  .year-container{
    padding-top: 22px;
    width: 80px;
    height: 80px;
    border: 5px black solid;
    border-radius: 50%;
    text-align: center;
  }
  </style>
