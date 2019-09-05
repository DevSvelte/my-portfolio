<template>
    <div @mousemove="mouseMove($event)">
    <app-navbar/>
    <header id="header">
        <div class="container">
            <img id="image" class="profile-image" src="img/icons/android-icon-144x144.png" alt="">
            <h1 class="title" style="opacity: 1">SAMEER TARIQ</h1>
            <h2>is a </h2>
            <h1>WEB DEVELOPER &amp; DESIGNER</h1>
            <a href="#my-skills" class="next">
                <i class="fas fa-chevron-down"></i>
            </a>
        </div>
    </header>
    </div>
</template>
<script>
import AppNavbar from '@/components/AppNavbar.vue';

export default {
    components: { AppNavbar },
    data: () => ({
        title : 'Hy there!'
    }),
    methods: {
        mouseMove(e){
            // let header = document.getElementById('header');
            // let val = e.screenX/window.innerWidth;
            // header.style.setProperty('--x', `${100*val}%`);
            // header.style.setProperty('--hue', `${(40*val)+20}deg`);
        }
    },
    created(){
        // eslint-disable-next-line
        particlesJS.load('header', '/particles.json');
    }
}
</script>

<style scoped>
#header {
    --x: 50%; --y: 50%;
    background: linear-gradient(to bottom,var(--color-a),rgb(145, 19, 82)) ,black;
    min-height: 100vh;
    display: flex;
    place-content: center;
}
#header>.container {
    background: transparent;
    border: 0px solid;
    outline: 0px solid;
    box-shadow: 0px;
    display: grid;
    position: absolute;
    animation: 2s fadein;
    top: 15vh;
    max-width:350px;
}
#header>.container>* {
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    margin: auto;
}
#header>.container>img {
    border-radius: 1%;
    margin-bottom: 10px;
    width: 200px;
    mix-blend-mode: darken;
    opacity: 0;
    animation: reveal 2s forwards;
    /* filter: hue-rotate(var(--hue, 30deg)); */
}
@keyframes reveal {
    from { opacity: 0; }
    to { opacity: 1; }
}
#header>.container>h1 {
    opacity: 0.9;
    font-weight: bold;
}
#header>.container>h2 {
    opacity: 0.4;
}
#header>.container>.next {
    display: grid;
    background: var(--color-b-2);
    height: 36px;
    width: 100px;
    place-content: center;
    margin: 20px auto;
    font-size: 25px;
    color: #ffffff77;
}
@keyframes fadein {
    from { opacity:0 }
}
</style>
