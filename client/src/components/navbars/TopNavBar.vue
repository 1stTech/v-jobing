<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item is-flex is-vcentered" href>
        <p>
          <strong class="is-size-1 logo">v-jobing</strong>
        </p>
      </a>
    </div>
    <div class="navbar-end">
      <div class="notification m-t-3 m-r-3">
        <strong class="has-text-danger">Donation:</strong> If you want to help the project, hire Junior!
        <br>
        <a @click="openModal">Read more.</a>
      </div>
    </div>
    <div id="read-more" class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <div class="box">
          <div class="content">
            <p>много текста много текста много текста много текста много текста много текста много текста много текста</p>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNavBar',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    openModal () {
      if (this.isActive) return
      this.isActive = true
    },
    closeModal () {
      if (!this.isActive) return
      this.isActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  font: 16px Dosis;
}
</style>