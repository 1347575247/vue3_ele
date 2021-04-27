import {createStore, StoreOptions} from 'vuex'
import { RootState } from './types'

export default createStore<RootState>({
  state: {
    scrollTop: 0
  },
  mutations: {
    changeScrollTop(state, topVal: number): void {
      state.scrollTop = topVal
    }
  },
  actions: {
  }

})