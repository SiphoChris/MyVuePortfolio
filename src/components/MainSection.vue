<template>
  <div class="layout">
    <Hero />
    <Education />
    <Projects />
    <Skills />
    <Experiences />
    <Testimonials />
  </div>
</template>

<script>
import Hero from "@/components/HeroSection.vue";
import Education from "@/components/Education.vue";
import Projects from "@/components/Projects.vue";
import Skills from '@/components/Skills.vue'
import Experiences from '@/components/Experiences.vue'
import Testimonials from '@/components/Testimonials.vue'

export default {
  components: {
    Hero,
    Education,
    Projects,
    Skills,
    Experiences,
    Testimonials
  },
};
</script>

<style src="../assets/css/style.css"></style>
