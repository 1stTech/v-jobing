<template>
  <div class="column">
    <div v-for="vacancy in vacancies" :key="vacancy.id">
      <div class="box">
        <span class="is-size-7 is-pulled-right">5 hours ago</span>
        <p><strong class="is-size-5 has-text-link">{{ vacancy.title }}</strong></p>
        <p class="is-size-6">Company: <strong>{{ vacancy.company }}</strong></p>
        <p class="is-size-6">Role: <strong>{{ vacancy.role }}</strong></p>
        <p class="has-text-grey-light">
          {{ vacancy.country }}, {{ vacancy.region }}, {{ vacancy.city }}
        </p>
        <p><span class="has-background-warning is-size-7">{{ vacancy.remote }}</span></p>
        <span v-for="tag in vacancy.tags" :key="tag">
          <span class="tag">{{ tag }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployerBoard',
  created() {
    this.$store.dispatch('getVacancies')
  },
  computed: {
    vacancies() {
      return this.$store.getters.vacancies
    }
  }
}
</script>

<style lang="scss" scoped>
$box-padding: 0.5rem !default;
$box-margin-b: 1rem !default;

.box {
  padding: $box-padding;
  margin-bottom: $box-margin-b;
}
</style>