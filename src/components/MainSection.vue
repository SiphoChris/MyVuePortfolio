<template>
  <div>
    <Spinner v-if="loading" />
    <div v-else class="layout">
      <Container>
        <template #content>
          <Education :data="educationData" />
        </template>
      </Container>
      <Container>
        <template #content>
          <Projects :data="projectsData" />
        </template>
      </Container>
      <Container>
        <template #content>
          <Skills :data="skillsData" />
        </template>
      </Container>
      <Container>
        <template #content>
          <Experiences :data="experiencesData" />
        </template>
      </Container>
      <Container>
        <template #content>
          <Testimonials :data="testimonialsData" />
        </template>
      </Container>
    </div>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import Education from "@/components/Education.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
import Experiences from "@/components/Experiences.vue";
import Testimonials from "@/components/Testimonials.vue";
import Spinner from "@/components/LoadingSpinner.vue";

import axios from 'axios';
import Swal from 'sweetalert2'

export default {
  components: {
    Container,
    Education,
    Skills,
    Experiences,
    Testimonials,
    Projects,
    Spinner
  },
  data() {
    return {
      loading: true,
      educationData: [],
      projectsData: [],
      skillsData: {},
      experiencesData: {},
      testimonialsData: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('https://siphochris.github.io/eompdata/')
        .then(response => {
          const data = response.data;
          this.educationData = data.education;
          this.projectsData = data.projects;
          this.skillsData = data.skills;
          this.experiencesData = data.experiences;
          this.testimonialsData = data.testimonials;
          this.loading = false;
        })
        .catch(error => {
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Data failed to load",
        });
        });
    }
  }
};
</script>

<style>
.layout {
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  /* grid-template-rows: repeat(5, 1fr); */
  /* gap: 10px; */
}
</style>

