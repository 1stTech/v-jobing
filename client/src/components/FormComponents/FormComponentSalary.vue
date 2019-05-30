<template>
  <div class="field">
    <label class="label">Salary</label>
    <div class="control">
      <input
        v-model="salarySumm"
        class="input"
        type="text"
        placeholder="Add the estimated salary (1000 - 2000)"
        v-on:input="salary"
      >
      <div class="select">
        <select v-model="salaryCode" @change="salary()">
          <option disabled value>Select currency</option>
          <option
            v-for="(el, index) in currency"
            :key="index"
            :value="el.code"
          >{{ el.title }}</option>
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
  props: {
    value: String,
  },
  mixins: [validationMixin],
  data() {
    return {
      salarySumm: '',
      salaryCode: '',
    }
  },
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
            currencyList.push({ title: `${el.name} | ${el.code}`, code: el.code })
          }
        }
      }
      return currencyList
    },
  },
  methods: {
    salary() {
      this.$emit('input', this.salarySumm + ' ' + this.salaryCode)
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
