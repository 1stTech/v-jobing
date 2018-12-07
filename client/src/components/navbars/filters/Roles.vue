<template>
  <div class="dropdown roles" :class="{ 'is-active': isActive }" v-clickOutside="closeDropdown">
    <div class="dropdown-trigger" @click="openDropdown">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Role</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <ul>
          <li class="dropdown-item">Backend</li>
          <li class="dropdown-item">Frontend</li>
          <li class="dropdown-item">QA Engineer</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roles',
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
.roles {
  margin-bottom: 0.5rem;
}
</style>

