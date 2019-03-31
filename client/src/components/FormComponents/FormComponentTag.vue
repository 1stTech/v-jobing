<template>
  <div class="field m-t-3">
    <label class="label">Select a tags.</label>
    <multiselect
      v-model="vacancy.tags"
      placeholder="Select a tags"
      :options="tagOptions"
      :multiple="true"
      :searchable="true"
      :loading="isLoading"
      :internal-search="false"
      :close-on-select="false"
      :show-labels="false"
      :taggable="false"
      :limit="10"
      @search-change="asyncFind"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'FormComponentTag',
  props: ['vacancy'],
  components: {
    Multiselect
  },
  data() {
    return {
      tagOptions: [],
      isLoading: false,
    }
  },
  created() {
    this.getTags('')
  },
  computed: {
    tags() {
      return this.$store.getters.tags.data
    },
  },
  methods: {
    asyncFind (query) {
      this.isLoading = true
      this.getTags(query)
      this.isLoading = false
    },
    async getTags(query) {
      await this.$store.dispatch('getTags', query)
      this.tagOptions = this.$store.getters.tags.data
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
