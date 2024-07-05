<template>
  <div class="container my-5">
    <div
      class="row justify-content-between align-items-center gap-4"
      id="skills"
    >
      <h2 class="my-5">Web Development Skills</h2>
      <h3 class="text-decoration-underline">Frontend</h3>
      <Card v-for="(tech, index) in skills.techStack.frontend" :key="index" class="skills mb-4">
        <template #CardBody>
          <img :src="tech.img" alt="skills-img" loading="lazy"/>
          <h3>{{ tech.title }}</h3>
        </template>
      </Card>
        <h3 class="text-decoration-underline">Tools</h3>
        <Card v-for="(tech, index) in skills.techStack.tools" :key="index" class="tools mb-5">
        <template #CardBody>
          <img :src="tech.img" alt="skills-img" loading="lazy"/>
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
.skills,
.tools{
  height: 180px;
}
</style>