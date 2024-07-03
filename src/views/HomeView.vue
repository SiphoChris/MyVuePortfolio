<template>
  <div class="home">
    <Nav />
    <Hero />
    <Education />
    <FooterComp />
  </div>
</template>

<script>
import Nav from '@/components/NavBar.vue'
import Hero from '@/components/HeroSection.vue'
import Education from '@/components/Education.vue'
import FooterComp from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Hero,
    Education,
    FooterComp,
  }
}
</script>
