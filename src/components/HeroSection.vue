<template>
  <div class="hero-section">
    <ul>
      <li v-for="line in about.description" :key="line" class="hero-text"><h3>{{ line }}</h3></li>
    </ul>
    <img :src="about.profile" alt="Profile Image" class="hero-image">
    <a id="cta2" @click.prevent>{{ reachMe }} <i class="bi bi-telephone-fill" href="0786532395"></i></a>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data(){
    return {
      reachMe: "Reach Me"
    }
  },
  computed: {
    ...mapState(['about']),
  },
};
</script>

<style src="../assets/css/style.css">
</style>