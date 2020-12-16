import { createReducer } from '@/UTILS/reduxHelper'
import Immutable from 'seamless-immutable'

import {
  INCREASE,
  DECREASE,
} from '@/ACTION/home'

export const INITIAL_STATE = Immutable({
  count: 1,
  error: null,
})

export const home = createReducer(INITIAL_STATE, {
  [INCREASE.SUCCESS]: state => state.merge({ count: state.count + 1 }),
  [DECREASE.SUCCESS]: state => state.merge({ count: state.count - 1 }),
  [INCREASE.FAILED]: (state, { error }) => state.merge({ error }),
  [DECREASE.FAILED]: (state, { error }) => state.merge({ error }),
})
