<template>
    <div>
      <div v-for="project in projects" :key="project.name">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.gitHub">GitHub</a>
        <a :href="project.vercel">Live Demo</a>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'ProjectsComp',
    computed: {
      ...mapState(['projects']),
    },
  };
  </script>