<template>
  <div class="container-fluid" id="main-section">
    <Spinner v-if="loading" />
    <div v-else>
      <About />
      <Skills  />
      <Education  />
      <Projects  />
    </div>
  </div>
</template>

<script>
import About from '@/components/About.vue'
import Education from "@/components/Education.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
import Spinner from "@/components/LoadingSpinner.vue";

import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "MainSection",
  components: {
    About,
    Education,
    Skills,
    Projects,
    Spinner,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://siphochris.github.io/eompdata/")
        .then((response) => {
          this.loading = false;
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Data failed to load",
            error,
          });
        });
    },
  },
};
</script>
