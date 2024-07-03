<template>
  <div class="home">
    <Nav />
    <Hero />
    <FooterComp />
  </div>
</template>

<script>
import Nav from '@/components/NavBar.vue'
import Hero from '@/components/HeroSection.vue'
import FooterComp from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    FooterComp,
    Hero
  }
}
</script>
