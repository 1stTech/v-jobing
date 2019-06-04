<template>
  <div class="field">
    <label class="label">
      Role
      <strong class="has-text-danger">*</strong>
    </label>
    <div class="control">
      <div
        class="select"
        :class="{ 'is-success': !$v.vacancy.role.$invalid }"
      >
        <select v-model="vacancy.role">
          <option disabled value>Select the role</option>
          <option
            v-for="(el, index) in roles"
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
  name: 'FormComponentRole',
  props: {
    vacancy: Object,
  },
  mixins: [validationMixin],
  created() {
    this.$store.dispatch('getRoles')
  },
  computed: {
    roles() {
      return this.$store.getters.roles
    }
  },
  validations: {
    vacancy: {
      role: {
        required
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
