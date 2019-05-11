<template>
  <div class="field">
    <label class="label">
      Experience level
      <strong class="has-text-danger">*</strong>
    </label>
    <div class="control">
      <div :class="{ 'is-success': !$v.vacancy.expLevel.$invalid }" class="box">
        <p v-for="(el, index) in expLevel" :key="index">
          <input type="checkbox" :value="el" :id="el" v-model="vacancy.expLevel">
          <label :for="el">{{ el }}</label>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "FormComponentJobType",
  props: ["vacancy"],
  mixins: [validationMixin],
  created() {
    this.$store.dispatch("getExpLevel");
  },
  computed: {
    expLevel() {
      return this.$store.getters.expLevelList;
    }
  },
  validations: {
    vacancy: {
      expLevel: {
        required
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.box.is-success {
  box-shadow:
        0 1px 3px hsl(141, 71%, 48%),
        0 0 0 1px hsl(141, 71%, 48%);
}
</style>
