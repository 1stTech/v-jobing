<template>
  <div class="dropdown cities" :class="{ 'is-active': isActive }" v-clickOutside="closeDropdown">
    <div class="dropdown-trigger" @click="openDropdown">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Cities</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content input-city">
        <div class="field">
          <p class="control has-icons-right">
            <input class="input" type="text" placeholder="Chose city">
            <span class="icon is-small is-right">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>
        <ul>
          <li class="dropdown-item">Tallinn</li>
          <li class="dropdown-item">Tartu</li>
          <li class="dropdown-item">Hapsalu</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cities',
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
.input-city {
  padding-top: 0;
}
</style>

