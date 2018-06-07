import { put, take, call, fork } from 'redux-saga/effects'
import axios from 'axios'
import { SAGA_SAMPLE } from '@/redux/types'
import { sagaSample } from '@/redux/actions/counter'

function* getSagaSample() {
  while (true) {
    yield take(SAGA_SAMPLE)
    const sagaCount: number = yield call(() =>
      axios
        .get('/api')
        .then(res => res.data.sagaCount)
        .catch(() => console.error('SAGA_SAMPLE API response error'))
    )
    yield put(sagaSample({ sagaCount }))
  }
}

export default function* rootSaga() {
  yield fork(getSagaSample)
}
