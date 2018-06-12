import { addSagaCount, GET_SAGA_COUNT } from '@/modules/counter'
import axios from 'axios'
import { call, fork, put, take } from 'redux-saga/effects'

function* getSagaCount() {
  while (true) {
    yield take(GET_SAGA_COUNT)
    const sagaCount: number = yield call(() =>
      axios
        .get('/api')
        .then(res => res.data.sagaCount)
        .catch(() => console.error('GET_SAGA_COUNT API response error'))
    )
    yield put(addSagaCount({ sagaCount }))
  }
}

export default function* rootSaga() {
  yield fork(getSagaCount)
}
