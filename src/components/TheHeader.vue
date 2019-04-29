<template>
    <header id="header" @mousemove="reposition($event)">
        <div class="abc" ></div>
    </header>
</template>
<script>
export default {
    methods: {
        reposition($event){
            let header = document.getElementById('header');
            header.style.setProperty('--x',$event.clientX / window.innerWidth * 100 + '%');
            header.style.setProperty('--y',($event.clientY + window.scrollY) / window.innerHeight * 100 + '%');
        }
    }
}
</script>

<style scoped lang="scss">
header {
    height: 100vh;
    --x: 50%;--y: 50%;
    background: radial-gradient(at var(--x) var(--y),rgb(187, 27, 187) , rgb(42, 42, 163));
}

</style>
