<template>
  <div class="home">
    <Nav />
    <FooterComp />
  </div>
</template>

<script>
import Nav from '@/components/NavBar.vue'
import FooterComp from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    FooterComp
  }
}
</script>
