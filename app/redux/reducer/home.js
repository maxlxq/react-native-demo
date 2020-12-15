
import Immutable from 'seamless-immutable'

import {
  INCREASE,
  DECREASE,
} from '@/ACTION/home'

export const INITIAL_STATE = Immutable({
  count: 1,
})

const increase = state => state.merge({ count: state.count + 1 })
const decrease = state => state.merge({ count: state.count - 1 })

export const home = (state = INITIAL_STATE, action) => {
  const { type } = action
  switch (type) {
    case INCREASE:
      return increase(state)
    case DECREASE:
      return decrease(state)
    default:
      return state
  }
}
