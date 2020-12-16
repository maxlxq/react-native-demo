import { combineReducers } from 'redux'
import { home } from '@/REDUCER/home'

const appReducer = combineReducers({
  home,
})

const reducer = (state, action) => {
  // console.log('reducer action.type:', state, action.type)
  let newState = state
  if (action.type === 'LOGOUT_REQUEST') {
    newState = {
      ...appReducer({}, {}),
      storage: state?.storage || {},
    }
  }
  return appReducer(newState, action)
}

export default reducer
