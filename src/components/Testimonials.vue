<template>
  <div>
    <div v-for="testimonial in testimonials" :key="testimonial.name">
      <h3>{{ testimonial.name }} {{ testimonial.surname }}</h3>
      <p>{{ testimonial.testimonial }}</p>
      <img :src="testimonial.profile" :alt="testimonial.name" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['testimonials']),
  },
};
</script>
  