import { getSagaCount } from '@/sagas/counter'
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield fork(getSagaCount)
}
