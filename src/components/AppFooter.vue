<template>
    <footer id="footer" class="notification is-black">
        <div class="container columns">
            <a target="_blank" href="//github.com/DevSvelte" class="column card">
                <i class="fab fa-github fa-3x"></i>
            </a>
            <a target="_blank" href="//twitter.com/DevSvelte" class="column card">
                <i class="fab fa-twitter fa-3x"></i>
            </a>
            <a target="_blank" href="//facebook.com/DevSvelte" class="column card">
                <i class="fab fa-facebook fa-3x"></i>
            </a>
            <a target="_blank" href="//www.youtube.com/channel/UCv8b1lbBXjhDqvxORpmoEnw?sub_confirmation=1" class="column card">
                <i class="fab fa-youtube fa-3x"></i>
            </a>
            <a target="_blank" href="mailto://devsvelte@gmail.com" class="column card">
                <i class="fas fa-envelope fa-3x"></i>
            </a>
        </div>
    </footer>
</template>

<style scoped>
#footer {
    min-height: 100vh;
    display: flex;
    place-items: center;
    padding: 0;
    border-radius: 0;
}
#footer>.container {
    margin: auto;
    height: 400px;
    width: 100%;
    background: transparent;
    color: white;
}
#footer>.container > .card {
    background: black;
    display: grid;
    place-items: center;
    text-decoration: none;
}
</style>
