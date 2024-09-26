<template>
  <div class="container my-5 py-5" id="EDUCATION">
    <Spinner v-if="loading" />
    <div v-else class="mb-5">
      <div class="row gap-5">
        <h3>Education &amp; Experiences</h3>
        <Timeline :timeline="education" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Spinner from "@/components/LoadingSpinner.vue";
import Timeline from "@/components/TimelineComp.vue";

export default {
  name: "EducationComp",
  components: {
    Timeline,
    Spinner,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(["education"]),
  },
  watch: {
    education(newEducation) {
      if (newEducation && newEducation.length > 0) {
        this.loading = false;
      }
    },
  },
  mounted() {
    if (this.education && this.education.length > 0) {
      this.loading = false;
    }
  },
};
</script>

<style scoped>

</style>


