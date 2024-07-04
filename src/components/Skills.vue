<template>
  <div class="container my-5">
    <div
      class="row justify-content-between align-items-center gap-4"
      id="skills"
    >
      <h2>Web Development Skills</h2>
      <Card v-for="(tech, index) in skills.techStack.frontend" :key="index">
        <template #CardBody>
          <img :src="tech.img" alt="skills-img"/>
          <h3>{{ tech.title }}</h3>
        </template>
      </Card>
      <Card v-for="(tech, index) in skills.techStack.tools" :key="index">
        <template #CardBody>
          <img :src="tech.img" alt="skills-img" />
          <h3>{{ tech.title }}</h3>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card.vue";

export default {
  components: {
    Card,
  },
  computed: {
    ...mapState({
      skills: (state) => state.skills,
    }),
  },
};
</script>
<style scoped>
</style>