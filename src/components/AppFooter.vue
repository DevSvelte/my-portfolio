<template>
    <footer id="footer" class="notification is-black">
        <pre class="container card">
    {
        
        'name'     : 'Sameer Tariq',
        'username' : 'WebDevHyena',
        'email'    : 'WebDevHyena@gmail.com',
        'github'   : 'https://github.com/WebDevHyena',
        'twitter'  : 'https://twitter.com/WebDevHyena',
        'fcc'      : 'https://freecodecamp.com/WebDevHyena',

    }
        </pre>
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
    height: 400px;
    max-width: 700px;
    width: 100%;
    background: transparent;
    color: white;
    display: grid;
    grid-template-rows: 1fr;
    place-items: center;
}
#footer>.container::-webkit-scrollbar{
    display: none;
}
#footer>.container>img {
    margin: auto;
    height: 100px;
}
</style>
