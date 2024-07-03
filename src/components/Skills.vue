<template>
    <div>
      <h2>{{ skills.title }}</h2>
      <h3>Frontend</h3>
      <ul>
        <li v-for="tech in skills.techStack.frontend" :key="tech">{{ tech }}</li>
      </ul>
      <h3>Tools</h3>
      <ul>
        <li v-for="tool in skills.techStack.tools" :key="tool">{{ tool }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['skills']),
    },
  };
  </script>
  