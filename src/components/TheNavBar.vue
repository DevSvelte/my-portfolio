<template>
    <nav class="navbar" id="navbar" :class="{'transparent': true}">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <img src="img/profile.jpeg" alt="Sameer Tariq" style="border-radius: 10%;">
          </div>
          <span class="navbar-burger" :class="{'is-active': isActive}" @click="isActive = !isActive">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu navbar-end" :class="{'is-active': isActive}" @click="isActive = false">
          <div class="navbar-item">
            <a href="#">My Work</a>
          </div>
          <div class="navbar-item">
            <a href="#">About</a>
          </div>
          <div class="navbar-item">
            <a href="#">Contact</a>
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
</style>
