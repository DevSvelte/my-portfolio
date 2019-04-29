<template>
    <div id="theskills" class="hero is-primary is-fullheight">
        <div class="hero-body is-primary is-multiline" style="margin: auto">
            <h1 class="title" style="margin:auto">My Tool Set</h1>
            <div class="card is-light has-text-primary" v-for="i in 6" :key="i">
                <div class="card-content">
                    <h1 class="title has-text-dark">VSCode</h1>
                    <p class="subtitle has-text-dark">An opensource text-editor project</p>
                    <p>I have learned HTML5. I can code HTML5 very easily and fast. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, veritatis!</p>
                </div>
            </div>
        </div>
    </div>
</template>
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
