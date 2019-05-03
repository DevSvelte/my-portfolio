<template>
    <nav id="navbar" class="navbar is-black">
        <div class="container">
            <div class="navbar-brand">
                <a href="/" class="navbar-item">
                    <img class="" src="img/icons/favicon-32x32.png" alt="logo">
                </a>
                <span class="navbar-burger" :class="{'is-active': activeMenu}" @click="activeMenu=!activeMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div class="navbar-menu navbar-end" :class="{'is-active': activeMenu}" @click="activeMenu=false">
                <a href="#" class="navbar-item">
                    <i class="fas fa-home"></i>&nbsp;&nbsp;Home
                </a>
                <a href="#" class="navbar-item">
                    <i class="fas fa-tools"></i>&nbsp;&nbsp;Skills
                </a>
                <a href="#" class="navbar-item">
                    <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Projects
                </a>
                <a href="#" class="navbar-item">
                    <i class="fas fa-user"></i>&nbsp;&nbsp;About
                </a>
                <a href="//github.com/imsamtar" target="_blank" class="navbar-item">
                    <i class="fab fa-github"></i>&nbsp;&nbsp;Github
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data: () => ({
        activeMenu: false
    })
}
</script>

<style scoped>
#navbar {
    background: var(--color-b-2);
    position: fixed;
    width: 100%;
    text-transform: uppercase;
}
</style>
