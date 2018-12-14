<template>
  <div id="read-more" class="modal is-active" :class="{ 'is-active': isActiveVacancy }">
    <div class="modal-background" @click="$emit('closeVModel')"></div>
    <div class="modal-content">
      <div class="box">
        <div class="content">
          <h3>Add new vacancy:</h3>
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
          <div class="field">
            <label class="label">
              Country
              <strong class="has-text-danger">*</strong>
            </label>
            <div class="control">
              <div
                class="select"
                :class="{
                  'is-success': !$v.vacancy.country.$invalid
                }"
              >
                <select v-model="vacancy.country">
                  <option disabled value>Select the country</option>
                  <option>Estonia</option>
                  <option>Latvia</option>
                  <option>Finland</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>
          </div>
          <!-- Region -->
          <div class="field">
            <label class="label">
              Region
              <strong class="has-text-danger">*</strong>
            </label>
            <div class="control">
              <div
                class="select"
                :class="{
                  'is-success': !$v.vacancy.region.$invalid
                }"
              >
                <select v-model="vacancy.region">
                  <option disabled value>Select the region</option>
                  <option>Harjumaa</option>
                  <option>Raplamaa</option>
                  <option>Tartumaa</option>
                </select>
              </div>
            </div>
          </div>
          <!-- City -->
          <div class="field">
            <label class="label">
              City
              <strong class="has-text-danger">*</strong>
            </label>
            <div class="control">
              <div
                class="select"
                :class="{
                  'is-success': !$v.vacancy.city.$invalid
                }"
              >
                <select v-model="vacancy.city">
                  <option disabled value>Select the city</option>
                  <option>Tallinn</option>
                  <option>Tartu</option>
                  <option>Rapla</option>
                </select>
              </div>
            </div>
          </div>
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
          <!-- Tags -->
          <div class="field m-t-3">
            <label class="label">Select a tags.</label>
            <multiselect
              v-model="vacancy.tags"
              :options="tagOptions"
              :multiple="true"
              :searchable="true"
              :close-on-select="false"
              :show-labels="false"
              placeholder="Select a tags"
              :taggable="false"
              @tag="addTag"
              :limit="10"
            ></multiselect>
          </div>
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
import Multiselect from 'vue-multiselect'

export default {
  name: "AddVacancy",
  mixins: [validationMixin],
  components: {
    Multiselect
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
      tagOptions: ['Javascript', 'Java', 'Php', 'C', 'C++', 'Python', 'Typescritp', 'Coffescript', 'Kotlin', 'Go', 'Kanban']
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
      country: {
        required
      },
      region: {
        required
      },
      city: {
        required
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
};
</script>

<style lang="scss" scoped>
</style>