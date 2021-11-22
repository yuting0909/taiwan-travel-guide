<template>
  <Navbar></Navbar>
  <main>
    <router-view :key="key"/>
  </main>
  <Footer></Footer>
</template>

<script>
// import Toolbar from '@/components/Toolbar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Navbar, Footer },
  computed: {
    key () {
      return this.$route.path + Math.random()
    }
  }
}
</script>

<style lang="scss"></style>
