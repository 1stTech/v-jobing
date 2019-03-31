<template>
  <div id="read-more" class="modal is-active" v-if="isActiveVacancy">
    <div class="modal-background" @click="$emit('closeVModel')"></div>
    <div class="modal-content">
      <div class="box">
        <div class="content">
          <h3>Add new vacancy:</h3>
          <!-- <div>VACANCY: {{ vacancy }}</div> -->
          <!-- Title -->
          <div class="field">
            <label class="label">
              Vacancy title
              <strong class="has-text-danger">*</strong>
            </label>
            <div class="control has-icons-right">
              <input
                v-model="$v.vacancy.title.$model"
                class="input"
                :class="{
                  'is-danger': $v.vacancy.title.$error,
                  'is-success': !$v.vacancy.title.$invalid
                }"
                type="text"
                placeholder="Vacancy title"
              >
              <span class="icon is-small is-right" v-show="!$v.vacancy.title.$invalid">
                <i class="fas fa-check"></i>
              </span>
              <p
                class="help is-danger"
                v-if="$v.vacancy.title.$dirty && !$v.vacancy.title.required"
              >Titile is require!</p>
              <p
                class="help is-danger"
                v-show="!$v.vacancy.title.minLength"
              >Titile must have at least 3 letters!</p>
              <p class="help is-danger" v-show="!$v.vacancy.title.maxLength">Titile is so long!</p>
            </div>
          </div>
          <!-- Company -->
          <div class="field">
            <label class="label">
              Company
              <strong class="has-text-danger">*</strong>
            </label>
            <div class="control has-icons-right">
              <input
                v-model="$v.vacancy.company.$model"
                class="input"
                :class="{
                  'is-danger': $v.vacancy.company.$error,
                  'is-success': !$v.vacancy.company.$invalid
                }"
                type="text"
                placeholder="Company name"
              >
              <span class="icon is-small is-right" v-show="!$v.vacancy.company.$invalid">
                <i class="fas fa-check"></i>
              </span>
              <p
                class="help is-danger"
                v-if="$v.vacancy.company.$dirty && !$v.vacancy.company.required"
              >Company name is require!</p>
              <p
                class="help is-danger"
                v-show="!$v.vacancy.company.minLength"
              >Company name must have at least 3 letters!</p>
              <p
                class="help is-danger"
                v-show="!$v.vacancy.company.maxLength"
              >Company name is so long!</p>
            </div>
          </div>
          <!-- Country -->
          <FormComponentCountry :vacancy="vacancy"/>
          <!-- Region -->
          <FormComponentRegion :vacancy="vacancy"/>
          <!-- City -->
          <FormComponentCity :vacancy="vacancy"/>
          <!-- Tag -->
          <FormComponentTag :vacancy="vacancy"/>
          <!-- Role -->
          <div class="field">
            <label class="label">
              Role
              <strong class="has-text-danger">*</strong>
            </label>
            <div class="control">
              <div
                class="select"
                :class="{
                  'is-success': !$v.vacancy.role.$invalid
                }"
              >
                <select v-model="vacancy.role">
                  <option disabled value>Select the role</option>
                  <option>Backend</option>
                  <option>Frontend</option>
                  <option>Fullstack</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
          <!-- Remote -->
          <label class="label">Select it if remote job.</label>
          <label class="checkbox">
            <input type="checkbox" v-model="vacancy.remote">
            Remote
          </label>
          <hr>
          <p>tags: {{ vacancy.tags.value }}</p>
          <p>Options: {{ vacancy.tags.options }}</p>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('closeVModel')"></button>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required, minLength, maxLength } from "vuelidate/lib/validators"
import FormComponentCountry from '@/components/FormComponents/FormComponentCountry'
import FormComponentRegion from '@/components/FormComponents/FormComponentRegion'
import FormComponentCity from '@/components/FormComponents/FormComponentCity'
import FormComponentTag from '@/components/FormComponents/FormComponentTag'

export default {
  name: "AddVacancy",
  mixins: [validationMixin],
  components: {
    FormComponentCountry,
    FormComponentRegion,
    FormComponentCity,
    FormComponentTag
  },
  props: ["isActiveVacancy"],
  data() {
    return {
      vacancy: {
        title: "",
        company: "",
        country: "",
        region: "",
        city: "",
        role: "",
        remote: false,
        tags: []
      },
    };
  },
  validations: {
    vacancy: {
      title: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(70)
      },
      company: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(70)
      },
      role: {
        required
      }
    }
  },
  methods: {
    addTag(newTag) {
      const tag = newTag
      this.vacancy.tags.value.push(tag)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
