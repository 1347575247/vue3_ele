import {createStore, StoreOptions} from 'vuex'
import { RootState } from './types'
import {CommonStore as common} from './modules/common'

const options: StoreOptions<RootState> = {
  state: {
  },
  modules: {
    common
  }
}

export default createStore(options)