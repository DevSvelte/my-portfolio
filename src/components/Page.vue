<template>
    <div class="hero is-primary is-fullheight" :class="{'pink': pink}">
        <div class="hero-body container is-primary is-multiline" style="margin: auto" :class="{'onecolumn': onecolumn}">
            <h1 class="title" style="margin:auto">{{title}}</h1>
            <slot>
                <div class="card is-light" v-for="i in 6" :key="i">
                    <div class="card-content">
                        <h1 class="title has-text-primary">HTML5</h1>
                        <p class="subtitle has-text-primary" style="opacity:0.8">A hypertext markup language</p>
                        <p class="has-text-primary" style="opacity: 0.7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, veritatis!</p>
                    </div>
                </div>
            </slot>
            <div style="place-self:center;grid-column: 1/-1;margin-top:20px">
                <a :href="'#'+next" class="button is-large is-dark nextbtn" style="background:transparent;">
                    <i class="fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'next', 'colored', 'onecolumn', 'pink']
}
</script>

<style scoped>
.hero {
    min-height: 101vh !important;
    scroll-snap-type: mandatory;
    scroll-behavior: smooth;
}
.hero-body {
    padding-top: 70px;
    width: 100%;
    height: 100%;
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    grid-template-rows: 70px;
    grid-gap: 10px;
}
.pink {
    background: #6e23ae !important;
}
.onecolumn {
    grid-template-columns: 1fr;
}
.hero-body > div.card {
    min-height: 200px;
}
.title {
    grid-column: 1/-1;
}
.nextbtn {
    background: var(--second) !important;
    opacity: 0.5;
}
.nextbtn:hover {
    opacity: 0.7;
}
@media screen and (max-width: 700px) {
    .hero-body {
        grid-template-columns: repeat(auto-fill, minmax(100%,1fr));
        margin: 0;
        padding: 52px 3px;
    }
}
</style>
