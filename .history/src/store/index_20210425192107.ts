import {createStore, StoreOptions} from 'vuex'
import { RootState } from './types'
import {CommonStore as common} from './modules/common'

export default createStore<RootState>({
  state: {
    scrollTop: 0;
  },
  modules: {
    common
  }
})