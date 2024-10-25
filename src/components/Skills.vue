<template>
  <div class="container my-5 py-5" id="SKILLS">
    <Spinner v-if="loading" />
    <div v-else>
      <div class="row justify-content-between align-items-center gap-4">
        <!-- Web Development Skills Section -->
        <h2 class="my-5">Technical Skills</h2>

        <!-- Frontend Skills -->
        <h3 class="text-decoration-underline">Frontend</h3>
        <div class="row">
          <Card
            v-for="(tech, index) in skills.techStack.frontend"
            :key="index"
            class="skills mb-4 col-md-4"
            data-aos="zoom-in"
          >
            <template #CardBody>
              <img :src="tech.img" alt="frontend-skill-img" loading="lazy" class="m-auto" />
              <h3>{{ tech.title }}</h3>
            </template>
          </Card>
        </div>

        <!-- Backend Skills -->
        <h3 class="text-decoration-underline mt-5">Backend</h3>
        <div class="row">
          <Card
            v-for="(tech, index) in skills.techStack.backend"
            :key="index"
            class="skills mb-4 col-md-4"
            data-aos="zoom-in"
          >
            <template #CardBody>
              <img :src="tech.img" alt="backend-skill-img" loading="lazy" class="m-auto" />
              <h3>{{ tech.title }}</h3>
            </template>
          </Card>
        </div>

        <!-- Tools Section -->
        <h3 class="text-decoration-underline mt-5">Tools</h3>
        <div class="row">
          <Card
            v-for="(tool, index) in skills.techStack.tools"
            :key="index"
            class="tools mb-5 col-md-4"
            data-aos="zoom-in"
          >
            <template #CardBody>
              <img :src="tool.img" alt="tools-img" loading="lazy" class="m-auto" />
              <h3>{{ tool.title }}</h3>
            </template>
          </Card>
        </div>

        <!-- softskills -->
        <h3 class="text-decoration-underline mt-5">Soft Skills</h3>
        <div class="row justify-content-center gap-3">
          <span id="soft-skills" v-for="(skills, index) in softSkills.skills" :key="index">{{
            skills
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card.vue";
import Spinner from "@/components/LoadingSpinner.vue";

export default {
  name: "SkillsComp",
  components: {
    Card,
    Spinner,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState({
      skills: (state) => state.skills,
      softSkills: (state) => state.softSkills,
    }),
  },
  watch: {
    skills(newSkills) {
      if (newSkills && Object.keys(newSkills).length) {
        this.loading = false;
      }
    },
  },
  mounted() {
    if (this.skills && Object.keys(this.skills).length) {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.skills,
.tools {
  height: 180px;
  text-align: center;
}
.skills img,
.tools img {
  max-width: 100px;
  height: auto;
  margin-bottom: 10px;
}
#soft-skills {
  padding: 12px 16px;
  border-radius: 10px;
  background-color: #f8f9fa;
  width: fit-content;
  font-weight: 500;
}
</style>


