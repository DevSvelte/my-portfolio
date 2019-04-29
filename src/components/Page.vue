<template>
    <div id="theskills" class="hero is-primary is-fullheight">
        <div class="hero-body is-primary is-multiline" style="margin: auto">
            <page-title></page-title>
            <slot>
                <div class="card is-light" v-for="i in 6" :key="i">
                    <div class="card-content">
                        <h1 class="title has-text-primary">HTML5</h1>
                        <p class="subtitle has-text-primary" style="opacity:0.8">A hypertext markup language</p>
                        <p class="has-text-primary" style="opacity: 0.7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, veritatis!</p>
                    </div>
                </div>
            </slot>
            <page-next></page-next>
        </div>
    </div>
</template>
<script>
import PageTitle from '@/components/Base/PageTitle.vue';
import PageNext from '@/components/Base/PageNext.vue';

export default {
    components: {
        PageTitle,
        PageNext
    }
}
</script>

<style scoped>
.hero-body {
    padding-top: 50px;
    width: 100%;
    height: 100%;
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(400px,1fr));
    grid-template-rows: 70px;
    grid-gap: 10px;
}
.title {
    grid-column: 1/-1;
}
@media screen and (max-width: 700px) {
    .hero-body {
        grid-template-columns: repeat(auto-fill, minmax(100%,1fr));
        margin: 0;
        padding: 52px 3px;
    }
}
</style>
