<template>
  <div>
    <PostTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PostTable from '@/components/PostTable.vue'

@Component({
  components: {
    PostTable
  }
})
export default class IndexPage extends Vue {
  mounted () {
    this.$store.dispatch('post/fetchPosts')
  }
}
</script>
