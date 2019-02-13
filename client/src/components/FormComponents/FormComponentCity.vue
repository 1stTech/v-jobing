<template>
  <div class="field">
    <label class="label">
      City
      <strong class="has-text-danger">*</strong>
    </label>
    <div class="control">
      <div
        class="select"
        :class="{ 'is-success': !$v.vacancy.city.$invalid }"
      >
        <select v-model="vacancy.city">
          <option disabled value>Select the city</option>
          <option
            v-for="(el, index) in cities"
            :key="index"
          >{{ el }}</option>
        </select>
        <div>CITIES: {{ cities }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required } from "vuelidate/lib/validators"

export default {
  name: "FormComponentCity",
  props: ['vacancy'],
  mixins: [validationMixin],
  watch: {
    'vacancy.region': function(region) {
      this.$store.dispatch('getCities', { code: this.vacancy.country.code, region })
    }
  },
  computed: {
    cities() {
      return this.$store.getters.cities.data
    }
  },
  validations: {
    vacancy: {
      city: {
        required
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>