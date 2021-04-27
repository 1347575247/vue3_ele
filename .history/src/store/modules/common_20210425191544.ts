import {ActionTree, MutationTree, GetterTree, Module} from 'vuex'
import {RootState} from './types'

interface CommonState {
  scorllTop: number;
}

const state: CommonState = {
  scorllTop: 0
}

const namespaced: boolean = true

export const CommonStore: Module<CommonState, RootState> = {
  namespaced,
  state
}
