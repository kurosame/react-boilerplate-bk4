import { SAGA_SAMPLE, sagaSample } from '@/modules/counter'
import axios from 'axios'
import { call, fork, put, take } from 'redux-saga/effects'

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
