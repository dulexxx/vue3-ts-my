import { createStore, Store, useStore as baseUseStore } from 'vuex'
import {InjectionKey } from 'vue'
// 创建一个新的 store 实例
export interface State {
    count: number
}
export const key: InjectionKey<Store<State>> = Symbol('store')
export const store = createStore<State>({
  state () {
    return {
      count: 78
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export function useStore () {
    return baseUseStore(key)
  }