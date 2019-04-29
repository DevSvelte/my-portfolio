<template>
    <div id="theskills" class="hero is-black is-fullheight">
        <div class="hero-body is-primary is-multiline" style="margin: auto">
            <!-- <h1 class="title" style="margin:auto"></h1> -->
            <div class="notification is-black" style="margin:auto">
                <pre id="details" style="background: transparent; font-size: 1.2em;min-height: 300px;">
    details: {
        username: 'imsamtar',
        name    : 'sameer_tariq',
        email   : 'imsamtar@gmail.com',
        github  : 'https://github.com/imsamtar',
        twitter : 'https://twitter.com/imsamtar',
        fcc     : 'https://freecodecamp.com/imsamtar',
        other   : '@imsamtar',
    }
                </pre>
                <div class="notification is-dark" id="links">
                    <a class="button is-dark" target="_blank" href="https://github.com/imsamtar">
                        <i class="fab fa-github"></i>
                        &nbsp;&nbsp;Github</a>
                    <a class="button is-dark" target="_blank" href="https://twitter.com/imsamtar">
                        <i class="fab fa-twitter"></i>
                        &nbsp;Twitter</a>
                    <a class="button is-dark" target="_blank" href="mail://imsamtar@gmail.com">
                        <i class="far fa-envelope"></i>
                        &nbsp;&nbsp;Email</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.hero {
    /* background: black !important; */
    padding: 0;
}
.hero-body {
    padding: 0;
    padding-top:60px;
    width: 100%;
    height: 100%;
    display: grid !important;
    grid-template-rows: 1fr;
}
.hero-body > div {
    margin: 0;
    height: 94vh;
    display: grid;
    place-content: center;
    height: 500px;
}
#links {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
}
#links > a {
    padding: 30px;
    font-size: large;
}
.title {
    grid-column: 1/-1;
}
@media screen and (max-width: 700px) {
    .hero-body {
        grid-template-columns: repeat(auto-fill, minmax(100%,1fr));
        margin: 0;
        padding: 52px 3px 3px 3px;
    }
    #details {
        display: none;
    }
    #links {
        /* margin-top: ; */
        grid-template-columns: 1fr;
    }
}
</style>
