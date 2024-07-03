<template>
  <div class="layout">
    <Container>
      <template #content>
        <Hero />
      </template>
    </Container>
    <Container>
      <template #content>
        <Education />
      </template>
    </Container>
    <Container>
      <template #content>
        <Projects />
      </template>
    </Container>
    <Container>
      <template #content>
        <Skills />
      </template>
    </Container>
    <Container>
      <template #content>
        <Experiences />
      </template>
    </Container>
    <Container>
      <template #content>
        <Testimonials />
      </template>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import About from "@/components/About.vue";
import Education from "@/components/Education.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
import Experiences from "@/components/Experiences.vue";
import Testimonials from "@/components/Testimonials.vue";

export default {
  components: {
    Container,
    About,
    Education,
    Skills,
    Experiences,
    Testimonials,
    Projects,
  },
};
</script>

<style src="../assets/css/style.css"></style>
