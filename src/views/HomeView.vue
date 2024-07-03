<template>
  <div class="home">
    <Nav />
    <Hero />
    <MainSection />
    <FooterComp />
  </div>
</template>

<script>
import Nav from '@/components/NavBar.vue'
import Hero from "@/components/HeroSection.vue";
import MainSection from '@/components/MainSection.vue'
import FooterComp from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Hero,
    MainSection,
    FooterComp,
  }
}
</script>
