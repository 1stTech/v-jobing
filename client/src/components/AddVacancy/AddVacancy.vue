<template>
  <div id="read-more" class="modal is-active" v-if="isActiveVacancy">
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
          <FormComponentCountry :vacancy="vacancy"/>
          <!-- Region -->
          <FormComponentRegion :vacancy="vacancy"/>
          <!-- City -->
          <FormComponentCity :vacancy="vacancy"/>
          <!-- Role -->
          <FormComponentRole :vacancy="vacancy"/>
          <!-- Job type -->
          <FormComponentJobType :vacancy="vacancy"/>
          <!-- Experience Level -->
          <FornComponentExpLevel :vacancy="vacancy"/>
          <!-- Job format -->
          <FornComponentJobFormat :vacancy="vacancy"/>
          <!-- Company Size -->
          <FormComponentComSize :vacancy="vacancy"/>
          <!-- Relocation -->
          <div class="field">
            <label class="label">Relocation</label>
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="vacancy.relocate">&nbsp;&nbsp;Yes
              </label>
            </div>
          </div>
          <!-- Tag -->
          <FormComponentTag :vacancy="vacancy"/>
          <!-- Description -->
          <div class="field">
            <label class="label">
              Description
              <strong class="has-text-danger">*</strong>
            </label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Describe your vacancy"
                v-model="$v.vacancy.description.$model"
                :class="{
                'is-danger': $v.vacancy.description.$error,
                'is-success': !$v.vacancy.description.$invalid
              }"
              ></textarea>
            </div>
          </div>
          <!-- Benefits -->
          <div class="field">
            <label class="label">Benefits</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Describe your benefits"
                v-model="vacancy.benefits"
              ></textarea>
            </div>
          </div>
          <!-- Contacts -->
          <div class="field">
            <label class="label">
              Contact
              <strong class="has-text-danger">*</strong>
            </label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Your contact information"
                v-model="$v.vacancy.contact.$model"
                :class="{
                'is-danger': $v.vacancy.contact.$error,
                'is-success': !$v.vacancy.contact.$invalid
              }"
              ></textarea>
            </div>
          </div>
          <!-- Salary -->
          <FormComponentSalary v-model="vacancy.salary"/>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('closeVModel')"></button>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import FormComponentCountry from '@/components/FormComponents/FormComponentCountry';
import FormComponentRegion from '@/components/FormComponents/FormComponentRegion';
import FormComponentCity from '@/components/FormComponents/FormComponentCity';
import FormComponentRole from '@/components/FormComponents/FormComponentRole';
import FormComponentJobType from '@/components/FormComponents/FormComponentJobType';
import FornComponentExpLevel from '@/components/FormComponents/FornComponentExpLevel';
import FornComponentJobFormat from '@/components/FormComponents/FornComponentJobFormat';
import FormComponentTag from '@/components/FormComponents/FormComponentTag';
import FormComponentComSize from '@/components/FormComponents/FormComponentComSize';
import FormComponentSalary from '@/components/FormComponents/FormComponentSalary';


export default {
  name: 'AddVacancy',
  mixins: [validationMixin],
  components: {
    FormComponentCountry,
    FormComponentRegion,
    FormComponentCity,
    FormComponentRole,
    FormComponentJobType,
    FornComponentExpLevel,
    FornComponentJobFormat,
    FormComponentTag,
    FormComponentComSize,
    FormComponentSalary,
  },
  props: ['isActiveVacancy'],
  data() {
    return {
      vacancy: {
        title: '',
        company: '',
        country: '',
        region: '',
        city: '',
        role: '',
        jobType: [],
        expLevel: [],
        jobFormat: [],
        tags: [],
        comSize: '',
        relocate: false,
        description: '',
        benefits: '',
        contact: '',
        salary: '',
      }
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
      description: {
        required,
        minLength: minLength(25),
        maxLength: maxLength(1000)
      },
      contact: {
        required,
        minLength: minLength(25),
        maxLength: maxLength(1000)
      }
    }
  },
  methods: {
    addTag(newTag) {
      const tag = newTag;
      this.vacancy.tags.value.push(tag);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
