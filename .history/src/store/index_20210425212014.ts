import {createStore, StoreOptions} from 'vuex'
import { RootState } from './types'

export default createStore<RootState>({
  state: {
    scrollTop: 0,
    OffsetTop: 0,
  },
  mutations: {
    changeScrollTop(state, topVal: number): void {
      state.scrollTop = topVal
    },
    initOffsetTop(state, topVal: number): void {
      state.offsetTop = topVal
    }
    
  },
  actions: {
  },
  getters: {
    isAssortSticky: (state: RootState) => {
      state.scrollTop > state.OffsetTop
    }
  }

})