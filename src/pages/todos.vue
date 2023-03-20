<template>
  <div>
    <TodoTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoTable from '@/components/TodoTable.vue'

@Component({
  components: {
    TodoTable
  }
})
export default class TodosPage extends Vue {
  mounted () {
    this.$store.dispatch('todo/fetchTodos')
  }
}
</script>
