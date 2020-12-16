import { all } from 'redux-saga/effects'
import homeSaga from './home'

export default function* rootSaga() {
  yield all([
    homeSaga(),
  ])
}
