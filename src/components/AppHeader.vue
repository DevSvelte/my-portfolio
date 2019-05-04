<template>
    <div @mousemove="mouseMove($event)">
    <app-navbar/>
    <header id="header">
        <div class="container card">
            <img class="profile-image" src="img/icons/android-icon-144x144.png" alt="">
            <h1 class="subtitle has-text-white">SAMEER TARIQ</h1>
            <h2 class="title has-text-white">I am a web developer!</h2>
        </div>
    </header>
    </div>
</template>
<script>
import AppNavbar from '@/components/AppNavbar.vue';
export default {
    components: { AppNavbar },
    methods: {
        mouseMove(e){
            let header = document.getElementById('header');
            header.style.setProperty('--x', `${100*e.screenX/window.innerWidth}%`);
            header.style.setProperty('--y', `calc(${100*(e.screenY + window.scrollY)/window.innerHeight}% - 100px)`);
        }
    }
}
</script>

<style scoped>
#header {
    --x: 50%;
    --y: 50%;
    background: radial-gradient(at var(--x) var(--y),#bb1bbb,#2a2aa3);
    min-height: 100vh;
    display: flex;
    place-items: center;
    padding-top: 52px;
}
#header>.container {
    min-height: calc(100vh - 52px);
    width: 100%;
    background: transparent;
    /* background: green; */
    color: white;
    display: grid;
    grid-template-rows: repeat(3, max-content);
    text-align: center;
    place-content: center;
}
#header>.container>img {
    margin: auto;
    height: 122px;
    border-radius: 50%;
    margin-bottom: 10px;
}
</style>
