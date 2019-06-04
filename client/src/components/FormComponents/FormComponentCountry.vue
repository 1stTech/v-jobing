<template>
  <div class="field">
    <label class="label">
      Country
      <strong class="has-text-danger">*</strong>
    </label>
    <div class="control">
      <div
        class="select"
        :class="{ 'is-success': !$v.vacancy.country.$invalid }"
      >
        <select v-model="vacancy.country">
          <option disabled value>Select the country</option>
          <option
            v-for="(el, index) in countries"
            :key="index"
            v-bind:value="{ name: el.country, code: el.code }"
          >{{ el.country }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'FormComponentCountry',
  props: {
    vacancy: Object,
  },
  mixins: [validationMixin],
  created() {
    this.$store.dispatch('getCountries')
  },
  computed: {
    countries() {
      return this.$store.getters.countries.data
    }
  },
  validations: {
    vacancy: {
      country: {
        required
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
