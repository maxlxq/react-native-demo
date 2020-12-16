import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '@/REDUCER'
import rootSaga from '@/SAGA'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = __DEV__ ? [reduxLogger] : []

const middlewares = applyMiddleware(sagaMiddleware, ...loggerMiddleware)

const configureStore = () => {
  const store = createStore(rootReducer, undefined, middlewares)
  sagaMiddleware.run(rootSaga)
  return { store }
}

export default configureStore
