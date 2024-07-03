<template>
  <div class="home">
    <Nav />
    <MainSection />
    <FooterComp />
  </div>
</template>

<script>
import Nav from '@/components/NavBar.vue'
import MainSection from '@/components/MainSection.vue'
import FooterComp from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    MainSection,
    FooterComp,
  }
}
</script>
