<template>
    <div id="theskills" class="hero is-primary is-fullheight">
        <div class="hero-body is-primary is-multiline" style="margin: auto">
            <h1 class="title" style="margin:auto">My Timeline</h1>
            <div class="notification  is-dark has-text-primary" v-for="i in 6" :key="i">
                <div class="notification-content columns has-text-white">
                    <h2 class="column is-1">HTML</h2>
                    <progress class="progress is-info" value="80" max="100"></progress>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.hero {
    background: #6e23ae !important;
    color: white;
}
.hero-body {
    padding-top: 50px;
    width: 100%;
    height: 100%;
    display: grid !important;
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-template-rows: 70px;
}
.hero-body > div {
    background: transparent !important;
}
.title {
    grid-column: 1/-1;
}
h2.column {
    align-self: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
}
.progress {
    margin-top: 2px;
    align-self: center;
}
@media screen and (max-width: 700px) {
    .hero-body {
        grid-template-columns: repeat(auto-fill, minmax(100%,1fr));
        margin: 0;
        padding: 52px 3px;
    }
}
</style>
