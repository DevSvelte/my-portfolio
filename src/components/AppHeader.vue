<template>
    <div @mousemove="mouseMove($event)">
    <app-navbar/>
    <header id="header">
        <div class="container">
            <img id="image" class="profile-image" src="img/icons/android-icon-144x144.png" alt="">
            <h1 class="title" style="opacity: 1">SAMEER TARIQ</h1>
            <h2>is a </h2>
            <h1>WEB DEVELOPER &amp; DESIGNER</h1>
            <div class="next">
                <i class="fas fa-chevron-down"></i>
            </div>
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
            let header = document.getElementById('header');
            header.style.setProperty('--x', `${100*e.screenX/window.innerWidth}%`);
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
    /* filter: blur(5px); */
    filter: drop-shadow(5px 5px 50px black);
}
#header>.container>* {
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    margin: auto;
}
#header>.container>img {
    border-radius: 50%;
    /* border: 1px solid #0b0e19; */
    margin-bottom: 10px;
    width: 200px;
    /* mix-blend-mode: luminosity; */
    /* filter: blur(10px); */
    filter: hue-rotate(var(--hue, 30deg));
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
    margin: 10px auto 20px auto;
    font-size: 25px;
    color: #ffffff77;
    position: relative;
    top: 80%;
}
@keyframes fadein {
    from { opacity:0 }
}
</style>
