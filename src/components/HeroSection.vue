<template>
  <div class="hero-section">
    <p v-for="line in about.description" :key="line" class="hero-text">{{ line }}</p>
    <img :src="about.profile" alt="Profile Image" class="hero-image">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['about']),
  },
};
</script>

<style src="../assets/css/style.css">
</style>