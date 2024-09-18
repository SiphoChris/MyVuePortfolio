<template>
  <section class="about-section row my-5 py-5" id="ABOUT">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <Spinner v-if="loading" />
      <div v-else>
        <div class="card w-90 mb-3" data-aos="fade-up">
          <div class="card-body text-center p-5">
            <h5 class="card-title h3 mb-5">About Me</h5>
            <p class="card-text h5">
              {{ about.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-2"></div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Spinner from "@/components/LoadingSpinner.vue";

export default {
  name: 'AboutComp',
  components: {
    Spinner,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(['about']),
  },
  watch: {
    about(newAbout) {
      if (newAbout && Object.keys(newAbout).length) {
        this.loading = false;
      }
    }
  },
  mounted() {
    if (this.about && Object.keys(this.about).length) {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.card-text {
  line-height: 30px;
}

</style>
