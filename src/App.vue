<template>
  <div id="app">
    <the-navbar></the-navbar>
    <the-header></the-header>
    <the-skills blue></the-skills>
    <the-skills-level pink></the-skills-level>
    <the-projects></the-projects>
    <the-pathway pink></the-pathway>
    <the-toolset blue></the-toolset>
    <the-timeline pink></the-timeline>
    <the-about blue></the-about>
    <the-contact pink></the-contact>
    <the-footer dark></the-footer>
  </div>
</template>
<script>
import TheNavBar from '@/components/TheNavBar.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheSkills from '@/components/TheSkills.vue';
import TheSkillsLevel from '@/components/TheSkillsLevel.vue';
import TheProjects from '@/components/TheProjects.vue';
import ThePathway from '@/components/ThePathway.vue';
import TheToolset from '@/components/TheToolset.vue';
import TheTimeline from '@/components/TheTimeline.vue';
import TheAbout from '@/components/TheAbout.vue';
import TheContact from '@/components/TheContact.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheNavbar: TheNavBar,
    TheHeader,
    TheSkills,
    TheSkillsLevel,
    TheProjects,
    ThePathway,
    TheToolset,
    TheTimeline,
    TheAbout,
    TheContact,
    TheFooter
  }
}
</script>
<style>
#app {
  min-height: 300vh;
}
</style>
