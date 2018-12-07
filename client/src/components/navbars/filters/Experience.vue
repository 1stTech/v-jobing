<template>
  <div class="dropdown experience" :class="{ 'is-active': isActive }" v-clickOutside="closeDropdown">
    <div class="dropdown-trigger" @click="openDropdown">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Experience level</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <ul>
          <li class="dropdown-item">Junior</li>
          <li class="dropdown-item">Middle</li>
          <li class="dropdown-item">Senior</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    closeDropdown() {
      if (!this.isActive) return
      this.isActive = false
    },
    openDropdown() {
      if (this.isActive) return
      this.isActive = true
    },
  },
}
</script>

<style lang="scss" scoped>
.experience {
  margin-bottom: 0.5rem;
}
</style>

