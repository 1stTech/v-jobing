<template>
  <div id="app">
    <TopNavBar />
    <BottomNavBar />
    <Filters />
    <MainLayout />
  </div>
</template>

<script>
import TopNavBar from './components/navbars/TopNavBar'
import BottomNavBar from './components/navbars/BottomNavBar'
import Filters from './components/navbars/filters/Filters.vue'
import MainLayout from './components/layouts/MainLayout.vue'

export default {
  name: 'App',
  components: {
    TopNavBar,
    BottomNavBar,
    Filters,
    MainLayout
  }
}
</script>

<style>
</style>
