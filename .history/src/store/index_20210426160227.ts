import {createStore, StoreOptions} from 'vuex'
import { RootState } from './types'

export default createStore<RootState>({
  state: {
    scrollTop: 0,
    OffsetTop: 0,    // AssortBar的offsetTop
    isSticky: false, // AssortBar是否采取粘性布局,
    inShadow: false, // Shadow组件是否被挂载
    shadowClick: false, // Shadow组件是否被点击
  },
  mutations: {
    // 当前滚动高度
    changeScrollTop(state, topVal: number): void {
      state.scrollTop = topVal
    },
    // 初始化asstorBar的offsetTop
    initOffsetTop(state, topVal: number): void {
      state.offsetTop = topVal
    },
    // 是否sticky
    shouldSticky(state, isSticky: boolean): void {
      state.isSticky = isSticky
    }
    
  },
  actions: {
  },
})