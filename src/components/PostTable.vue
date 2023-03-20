<template>
  <div style="margin-top: 15px">
    <b-row>
      <b-col lg="12">
        <b-form-input
          id="filter-input"
          v-model="filter"
          type="search"
          placeholder="Type to Search"
        />
      </b-col>
      <b-col lg="12">
        <b-table
          :items="lists"
          :fields="fields"
          stacked="md"
          show-empty
          small
          @row-clicked="rowClicked"
        />
      </b-col>
    </b-row>
    <b-modal ref="my-modal" hide-footer title="User Inform">
      <div class="d-block text-center">
        <b-form-textarea plaintext :value="modal" rows="2" />
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPostState } from '~/interfaces/IPost'
import { $axios } from '~/utils/api'

export default Vue.extend({
  data () {
    return {
      modal: '',
      filter: '',
      fields: [
        { key: 'title', label: 'Title' },
        { key: 'body', label: 'Body' }
      ]
    }
  },

  computed: {
    lists (): [IPostState] {
      const data = this.$store.getters['post/listPosts'] || []

      if (!this.filter) { return data }

      return data.filter((item: IPostState) => {
        return item.title.match(this.filter)
      })
    }
  },
  methods: {
    async rowClicked (e: IPostState) {
      const user = (await $axios.get('/users/' + e.userId)).data;

      (this.$refs['my-modal'] as any).show()
      this.modal = user.name

      return user
    }
  }
})
</script>

<style scoped>

</style>
