<template>
  <div class="dropdown regions" :class="{ 'is-active': isActive }" v-clickOutside="closeDropdown">
    <div class="dropdown-trigger" @click="openDropdown">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Region</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content input-region">
        <div class="field">
          <p class="control has-icons-right">
            <input class="input" type="text" placeholder="Chose country">
            <span class="icon is-small is-right">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>
        <ul>
          <li class="dropdown-item">Harjumaa</li>
          <li class="dropdown-item">Raplamaa</li>
          <li class="dropdown-item">Tartumaa</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Regions',
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
.input-region {
  padding-top: 0;
}
.regions {
  margin-bottom: 0.5rem;
}
</style>

