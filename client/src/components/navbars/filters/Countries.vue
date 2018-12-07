<template>
  <div class="dropdown countries" :class="{ 'is-active': isActive }" v-clickOutside="closeDropdown">
    <div class="dropdown-trigger" @click="openDropdown">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Country</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content input-country">
        <div class="field">
          <p class="control has-icons-right">
            <input class="input" type="text" placeholder="Chose country">
            <span class="icon is-small is-right">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>
        <ul>
          <li class="dropdown-item">Estonia</li>
          <li class="dropdown-item">Latvia</li>
          <li class="dropdown-item">Finland</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Countries',
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
.input-country {
  padding-top: 0;
}
.countries {
  margin-bottom: 0.5rem;
}
</style>

