import {createStore, StoreOptions} from 'vuex'
import { RootState } from './types'
import {CommonStore as common} from './common'

const options: StoreOptions<RootState> = {
  state: {
    version: '1.0'
  },
  modules: {
    common
  }
}

export default createStore(options)