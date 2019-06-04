<template>
  <div class="field">
    <label class="label">
      Region
      <strong class="has-text-danger">*</strong>
    </label>
    <div class="control">
      <div
        class="select"
        :class="{ 'is-success': !$v.vacancy.region.$invalid }"
      >
        <select v-model="vacancy.region">
          <option disabled value>Select the region</option>
          <option
            v-for="(el, index) in regions"
            :key="index"
          >{{ el }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'FormComponentRegion',
  props: {
    vacancy: Object,
  },
  mixins: [validationMixin],
  watch: {
    'vacancy.country.code': function(code) {
      this.$store.dispatch('getRegions', code)
    }
  },
  computed: {
    regions() {
      return this.$store.getters.regions.data
    }
  },
  validations: {
    vacancy: {
      region: {
        required
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
