<template>
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <img src="img/profile.jpeg" alt="Sameer Tariq" style="border-radius: 10%;">
          </div>
          <span class="navbar-burger" @click="isActive = !isActive">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu navbar-end" :class="{'is-active': isActive}">
          <div class="navbar-item">
            <div>My Work</div>
          </div>
          <div class="navbar-item">
            <div>About</div>
          </div>
          <div class="navbar-item">
            <div>Contact</div>
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
