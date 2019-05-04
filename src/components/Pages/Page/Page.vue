<template>
    <section class="page" :style="mainStyles">
        <h1 class="mytitle" v-if="title">{{title}}</h1>
        <div class="container">
            <slot></slot>
        </div>
        <div class="next" v-if="next">
            <i class="fas fa-chevron-down"></i>
        </div>
    </section>
</template>
<script>
export default {
    props: ['title','next','background'],
    computed: {
        mainStyles(){return {
            background: this.background
        }}
    }
}
</script>
<style scoped>
.page {
    min-height: 100vh;
    padding-top: 52px;
}
.mytitle {
    text-align: center;
    /* mix-blend-mode: difference; */
    text-transform: uppercase;
    font-weight: 900 !important;
    /* background: var(--color-b-2); */
    padding: 10px;
    max-width: 300px;
    margin: auto;
    font-size: 25px;
    letter-spacing: 10px;
}
.container {
    min-height: calc(100vh - 52px - 36px - 36px - 40px);
}
.next {
    display: flex;
    background: var(--color-b-2);
    height: 36px;
    max-width: 100px;
    place-items: center;
    place-content: center;
    margin: 10px auto;
    font-size: 25px;
}
</style>
