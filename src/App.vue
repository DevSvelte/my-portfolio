<template>
  <div id="app">
    <the-navbar></the-navbar>
    <the-header></the-header>
    <the-skills></the-skills>
  </div>
</template>
<script>
import TheNavBar from '@/components/TheNavBar.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheSkills from '@/components/TheSkills.vue';

export default {
  components: {
    TheNavbar: TheNavBar,
    TheHeader,
    TheSkills
  }
}
</script>
<style>
#app {
  min-height: 300vh;
}
</style>
