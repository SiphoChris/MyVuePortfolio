<template>
  <div class="container" id="projects">
    <h3 class="mb-5">Projects</h3>
    <div class="row gap-4 justify-content-center">
      <Card v-for="project in projects" :key="project.name" class="box">
        <template #CardImage>
          <img :src="project.image" class="card-img-top" :alt="project.name" loading="lazy"/>
        </template>
        <template #CardBody>
          <div class="card-content-holder gap-3">
            <h5 class="card-title">{{ project.name }}</h5>
            <div class="btn-container">
              <a
                :href="project.gitHub"
                class="btn btn-warning me-2 mb-2"
                target="_blank"
                >GitHub <i class="bi bi-github"></i
              ></a>
              <a
                :href="project.vercel"
                class="btn btn-warning mb-2"
                target="_blank"
                >Live Demo <i class="bi bi-globe"></i
              ></a>
            </div>
            <p class="card-text">{{ project.description }}</p>
          </div>
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
  name: "ProjectsComp",
  computed: {
    ...mapState(["projects"]),
  },
};
</script>
