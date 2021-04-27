import {createStore, StoreOptions} from 'vuex'
import { RootState } from './types'
import {CommonStore as Common} from './common'

const options: StoreOptions<RootState> = {
  state: {
    version: '1.0'
  },
  modules: {
    Common
  }
}

export default createStore(options)