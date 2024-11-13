<template>
  <Spinner v-if="loading" />
  <div class="hero-section" v-else>
    <ul class="fade-in-right">
      <li v-for="line in about.introduction" :key="line" class="hero-text">
        <h1>{{ line }}</h1>
      </li>
    </ul>
    <div class="d-flex flex-column">
      <img
        :src="about.profile"
        alt="Profile Image"
        class="hero-image fade-in-left"
        loading="lazy"
      />
      <a
        class="btn btn-success mt-4"
        data-aos="fade-up"
        data-aos-duration="1100"
        style="width: auto; align-self: center"
        role="button"
        href="https://drive.google.com/uc?export=download&id=1WZQDmMIQscyPPq1M4t97IVWS9EgCe2OC"
        download
        >Download CV</a
      >
      <a id="cta2" href="#reachMe" class="mx-auto"
        >{{ reachMe }} <i class="bi bi-telephone-fill"></i
      ></a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Spinner from "@/components/LoadingSpinner.vue";

export default {
  name: "HeroSection",
  components: {
    Spinner,
  },
  data() {
    return {
      reachMe: "Reach Me",
      loading: true,
    };
  },
  computed: {
    ...mapState(["about"]),
  },
  watch: {
    about(newAbout) {
      if (newAbout && Object.keys(newAbout).length) {
        this.loading = false;
      }
    },
  },
  mounted() {
    if (this.about && Object.keys(this.about).length) {
      this.loading = false;
    }
  },
};
</script>
<style scoped>
.hero-section {
  padding: 36px;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  background-color: var(--primary);
  color: var(--light-text);
}

.hero-section {
  background: radial-gradient(
        circle farthest-side at 0% 50%,
        #282828 23.5%,
        rgba(255, 170, 0, 0) 0
      )
      21px 30px,
    radial-gradient(
        circle farthest-side at 0% 50%,
        #2c3539 24%,
        rgba(240, 166, 17, 0) 0
      )
      19px 30px,
    linear-gradient(
        #282828 14%,
        rgba(240, 166, 17, 0) 0,
        rgba(240, 166, 17, 0) 85%,
        #282828 0
      )
      0 0,
    linear-gradient(
        150deg,
        #282828 24%,
        #2c3539 0,
        #2c3539 26%,
        rgba(240, 166, 17, 0) 0,
        rgba(240, 166, 17, 0) 74%,
        #2c3539 0,
        #2c3539 76%,
        #282828 0
      )
      0 0,
    linear-gradient(
        30deg,
        #282828 24%,
        #2c3539 0,
        #2c3539 26%,
        rgba(240, 166, 17, 0) 0,
        rgba(240, 166, 17, 0) 74%,
        #2c3539 0,
        #2c3539 76%,
        #282828 0
      )
      0 0,
    linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0
      #282828;
  background-size: 100px 100px 100px;
}
</style>
