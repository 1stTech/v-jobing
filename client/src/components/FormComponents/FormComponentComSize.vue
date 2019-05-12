<template>
  <div class="field">
    <label class="label">
      Company size
      <strong class="has-text-danger">*</strong>
    </label>
    <div class="control">
      <div
        class="select"
        :class="{ 'is-success': !$v.vacancy.comSize.$invalid }"
      >
        <select v-model="vacancy.comSize">
          <option disabled value>Select company size</option>
          <option
            v-for="(el, index) in comSize"
            :key="index"
          >{{ el }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required } from "vuelidate/lib/validators"

export default {
  name: "FormComponentComSize",
  props: ["vacancy"],
  mixins: [validationMixin],
  created() {
    this.$store.dispatch('getCompanySize')
  },
  computed: {
    comSize() {
      return this.$store.getters.companySize
    }
  },
  validations: {
    vacancy: {
      comSize: {
        required
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
