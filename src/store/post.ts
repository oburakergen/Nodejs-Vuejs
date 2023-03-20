import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { IPosts, IPostState } from '@/interfaces/IPost'
import { ActionType, MutationType } from '@/types'
import { $axios } from '@/utils/api'

export const state = (): IPosts => ({
  posts: null
})

export const mutations: MutationTree<IPosts> = {
  [MutationType.setPosts] (state: IPosts, data: [IPostState]): [IPostState] {
    return state.posts = data
  }
}

export const actions: ActionTree<any, any> = {
  async [ActionType.fetchPosts] ({ commit }) {
    commit(MutationType.setPosts, (await $axios.get('/posts')).data)
  }
}

export const getters: GetterTree<IPosts, IPosts> = {
  listPosts: (state: IPosts): [IPostState] | null => state.posts
}
