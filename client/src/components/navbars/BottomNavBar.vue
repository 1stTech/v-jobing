<template>
  <nav class="bd-tabs">
    <div class="tabs is-centered">
      <ul>
        <li><a href="#" @click="openVacancyModal" @closeVacancyModal="closeVacancyModal">Add vacancy</a></li>
        <li><a href="#">Add resume</a></li>
      </ul>
    </div>
    <AddVacancy :isActiveVacancy="isActiveVacancy" @closeVModel="closeVacancyModal"/>
  </nav>
</template>

<script>
import AddVacancy from '@/components/AddVacancy/AddVacancy.vue'

export default {
  name: 'BottomNavBar',
  components: {
    AddVacancy
  },
  data () {
    return {
      isActiveVacancy: false
    }
  },
  methods: {
    openVacancyModal () {
      if (this.isActiveVacancy) return
      this.isActiveVacancy = true
    },
    closeVacancyModal () {
      if (!this.isActiveVacancy) return
      this.isActiveVacancy = false
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  margin-bottom: 0.5rem;
}
</style>