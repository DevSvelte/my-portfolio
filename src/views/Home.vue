<template>
    <div id="home" class="hero is-primary">
        <skills />
        <projects />
        <about />
    </div>
</template>
<script>
import Skills from '@/components/Pages/Skills.vue';
import Projects from '@/components/Pages/Projects.vue';
import About from '@/components/Pages/About.vue';

export default {
    components: { Skills, Projects, About }
}
</script>

