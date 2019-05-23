<template>
  <div class="field">
    <label class="label">Salary</label>
    <div class="control">
      <input
        v-model="vacancy.salary"
        class="input"
        type="text"
        placeholder="Add the estimated salary (1000 - 2000)"
      >
      <div class="select">
        <select>
          <option disabled value>Select currency</option>
          <option
            v-for="(el, index) in currency"
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
  name: 'FormComponentSalary',
  props: ['vacancy'],
  mixins: [validationMixin],
  created() {
    this.$store.dispatch('getCurrencies')
  },
  computed: {
    currency() {
      let list = this.$store.getters.currencies.data
      const currencyList = []
      if (list !== undefined) {
        for (const el of list) {
          if (el.code == '(none)' || el.code == null) el.code = ''
          if (el.name !== null) {
            currencyList.push(`${el.name} | ${el.code}`)
          }
        }
      }
      return currencyList
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
