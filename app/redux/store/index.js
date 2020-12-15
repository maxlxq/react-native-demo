import { createStore } from 'redux'
import rootReducer from '@/REDUCER'

let store = createStore(rootReducer)

export default store
