<template>
  <div>
    <div class="d-flex justify-content-center">
      <span >
        <span @click="showFilters = !showFilters" class="fas fa-2x fa-angle-down"></span>
      </span>
    </div>
    <transition name="fade">
      <div class="box" v-show="showFilters"> 
        <div class="columns">
          <div class="column d-flex flex-column">
            <Countries/>
            <Regions/>
            <Cities/>
          </div>
          <div class="column">
            <Roles/>
          </div>
          <div class="column">
            <Experience/>
          </div>
          <div class="column">Tags</div>
          <div class="column">
            <p>Job type:</p>
            <ul>
              <li>
                <label class=""><input type="checkbox">Full-time</label>
              </li>
              <li>
                <label class=""><input type="checkbox">Contract</label>
              </li>
              <li>
                <label class=""><input type="checkbox">Internship</label>
              </li>
            </ul>
          </div>
          <div class="column">
            <ul>
              <li>
                <label class=""><input type="checkbox">Office</label>
              </li>
              <li>
                <label class=""><input type="checkbox">Remote</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Countries from './Countries.vue'
import Regions from './Regions.vue'
import Cities from './Cities.vue'
import Roles from './Roles.vue'
import Experience from './Experience.vue'

export default {
  name: 'Filters',
  components: {
    Countries,
    Regions,
    Cities,
    Roles,
    Experience
  },
  data () {
    return {
      showFilters: false
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin: 0.5rem 1.5rem 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

