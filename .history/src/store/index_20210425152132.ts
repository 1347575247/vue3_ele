import {createStore, StoreOptions} from 'vuex'
import { RootState } from './types'
import {CommonStore} from './common'

const options: StoreOptions<RootState> = {
  state: {
    version: '1.0'
  },
  modules: {
    CommonStore
  }
}

export default createStore(options)