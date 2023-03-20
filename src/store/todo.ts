import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { ActionType, MutationType } from '@/types'
import { $axios } from '@/utils/api'
import { ITodos, ITodoState } from '~/interfaces/ITodo'

export const state = (): ITodos => ({
  todos: null
})

export const mutations: MutationTree<ITodos> = {
  [MutationType.setTodos] (state: ITodos, data: [ITodoState]): [ITodoState] {
    return state.todos = data
  }
}

export const actions: ActionTree<any, any> = {
  async [ActionType.fetchTodos] ({ commit }) {
    commit(MutationType.setTodos, (await $axios.get('/todos')).data)
  }
}

export const getters: GetterTree<ITodos, ITodos> = {
  listTodos: (state: ITodos): [ITodoState] | null => state.todos
}
