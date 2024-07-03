<template>
  <div class="layout">
    <Hero />
    <Education />
    <Projects />
  </div>
</template>

<script>
import Hero from "@/components/HeroSection.vue";
import Education from "@/components/Education.vue";
import Projects from "@/components/Projects.vue";

export default {
  components: {
    Hero,
    Education,
    Projects,
  },
};
</script>

<style src="../assets/css/style.css"></style>
