<template>
  <Spinner v-if="loading" />
  <div class="hero-section" v-else>
    <ul class="fade-in-right">
      <li v-for="line in about.description" :key="line" class="hero-text"><h1>{{ line }}</h1></li>
    </ul>
    <img :src="about.profile" alt="Profile Image" class="hero-image fade-in-left" loading="lazy">
    <a id="cta2" href="#reachMe">{{ reachMe }} <i class="bi bi-telephone-fill"></i></a>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from "@/components/LoadingSpinner.vue";

export default {
  components: {
    Spinner
  },
  data(){
    return {
      reachMe: "Reach Me",
    }
  },
  computed: {
    ...mapState(['about']),
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

<style src="../assets/css/style.css">
</style>