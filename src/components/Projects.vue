<template>
  <div class="container my-5 py-5" id="PROJECTS">
    <Spinner v-if="loading" />
    <div v-else>
      <h3 class="mb-5">Projects</h3>
      <div class="row gap-4 justify-content-center">
        <Card
          v-for="project in projects"
          :key="project.name"
          class="box"
          data-aos="zoom-in-up"
        >
          <template #CardImage>
            <img
              :src="project.image"
              class="card-img-top"
              :alt="project.name"
              loading="lazy"
            />
          </template>
          <template #CardBody>
            <div class="card-content-holder gap-3">
              <h5 class="card-title">{{ project.name }}</h5>
              <div class="btn-container">
                <a
                  :href="project.gitHub"
                  class="btn btn-warning me-2 mb-2"
                  target="_blank"
                >
                  GitHub <i class="bi bi-github"></i>
                </a>
                <a
                  :href="project.vercel"
                  class="btn btn-warning mb-2"
                  target="_blank"
                >
                  Live Demo <i class="bi bi-globe"></i>
                </a>
              </div>
              <p class="card-text">{{ project.description }}</p>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card.vue";
import Spinner from "@/components/LoadingSpinner.vue";

export default {
  name: "ProjectsComp",
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
    ...mapState(["projects"]),
  },
  watch: {
    projects(newProjects) {
      if (newProjects && newProjects.length > 0) {
        this.loading = false;
      }
    }
  },
  mounted() {
    if (this.projects && this.projects.length > 0) {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.card {
  width: 18rem;
  height: 400px;
}
</style>
