<template>
    <nav class="navbar" id="navbar" :class="{'transparent': true}">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <a href="/" id="logo" style="outline: 0;">
              <img src="img/profile.jpeg" alt="Sameer Tariq" style="border-radius: 10%; width: auto">
            </a>
          </div>
          <span class="navbar-burger" :class="{'is-active': isActive}" @click="isActive = !isActive">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu navbar-end" :class="{'is-active': isActive}" @click="isActive = false">
          <div class="navbar-item">
            <a href="#projects" class="button is-dark"><i class="fas fa-briefcase"></i>&nbsp;&nbsp;My Work</a>
          </div>
          <div class="navbar-item">
            <a href="#about" class="button is-dark"><i class="fas fa-user"></i>&nbsp;&nbsp;About</a>
          </div>
          <div class="navbar-item">
            <a href="#contact" class="button is-dark"><i class="fas fa-phone"></i>&nbsp;&nbsp;Contact</a>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  data: () => ({
    isActive: false
  })
}
</script>
<style scoped>
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
.transparent {
  background: var(--second) !important;
}
a, span,
.transparent > div,
.transparent > div > div > a {
  color: white;
}
.navbar-menu.navbar-end {
  background: transparent
}
.navbar-item > a.button {
  transition-duration: 500ms;
  background: transparent;
}
.navbar-item > a.button:hover {
  color: white;
  background: var(--second);
}
.navbar-item > #logo {
  color: white;
  transform: scale(1);
}
</style>
