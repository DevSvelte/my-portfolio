<template>
  <div id="app">
    <app-header/>
    <home/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Home from '@/views/Home.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: { Home, AppHeader, AppFooter },
}
</script>