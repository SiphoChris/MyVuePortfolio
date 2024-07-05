<template>
  <div id="testimonials">
  <Carousel>
    <template #carouselItems>
      <div id="carouselExampleDark" class="carousel carousel-dark slide custom-carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item" :class="{active: testimonial.id == 1}" data-bs-interval="10000" v-for="testimonial in testimonials" :key="testimonial.id">
            <img
              :src="testimonial.profile"
              :alt="testimonial.name"
              class="d-block testimonial-image"
            />
            <div class="carousel-caption d-block">
              <h5 style="color: #fb8500; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">{{ testimonial.name }} {{ testimonial.surname }}</h5>
              <p style="color: #fb8500; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">{{ testimonial.testimonial }}.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </template>
  </Carousel>
</div>
</template>

<script>
import { mapState } from "vuex";
import Carousel from "@/components/Carousel.vue";

export default {
  components: {
    Carousel,
  },
  computed: {
    ...mapState(["testimonials"]),
  },
};
</script>
<style scoped>
.testimonial-image {
  width: 250px;
}


.custom-carousel {
  padding: 16px;
  border: 2px gray solid;
  border-radius: 12px;
  font-weight: bold;
  margin: 42px 0;
}

</style>
