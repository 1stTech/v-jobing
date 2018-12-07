<template>
  <div class="columns">
    <EmployerBoard />
    <JobseekerBoard />
  </div>
</template>

<script>
import EmployerBoard from './EmployerBoard.vue'
import JobseekerBoard from './JobseekerBoard.vue'


export default {
  name: 'Boards',
  components: {
    EmployerBoard,
    JobseekerBoard
  }
}
</script>

<style lang="scss" scoped>
</style>