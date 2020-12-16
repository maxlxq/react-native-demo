import { put, fork, takeLatest, all } from 'redux-saga/effects'

import {
  INCREASE,
  DECREASE,
} from '@/ACTION/home'

const increase = function* increase() {
  try {
    yield put({ type: INCREASE.SUCCESS })
  } catch (error) {
    yield put({ type: INCREASE.FAILED, error })
  }
}

const decrease = function* decrease() {
  try {
    yield put({ type: DECREASE.SUCCESS })
  } catch (error) {
    yield put({ type: DECREASE.FAILED, error })
  }
}

const watchIncrease = function* watchIncrease() {
  yield takeLatest(INCREASE.REQUEST, increase)
}

const watchDecrease = function* watchDecrease() {
  yield takeLatest(DECREASE.REQUEST, decrease)
}

export default function* homeSaga() {
  yield all([
    fork(watchIncrease),
    fork(watchDecrease),
  ])
}
