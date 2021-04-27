import {createStore, StoreOptions} from 'vuex'
import { RootState } from './types'

export default createStore<RootState>({
  state: {
    scrollTop: 0,
    OffsetTop: 0,
  },
  mutations: {
    // 当前滚动高度
    changeScrollTop(state, topVal: number): void {
      state.scrollTop = topVal
    },
    // 初始化asstorBar的offsetTop
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