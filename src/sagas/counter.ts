import { addSagaCount, GET_SAGA_COUNT } from '@/modules/counter'
import axios from 'axios'
import { call, put, take } from 'redux-saga/effects'

export function getApiSagaCount() {
  return axios
    .get('/api')
    .then(res => {
      return { sagaCount: res.data.sagaCount }
    })
    .catch(err => {
      return { err }
    })
}

export function* getSagaCount() {
  while (true) {
    yield take(GET_SAGA_COUNT)
    const { sagaCount, err }: { sagaCount: number; err: Error } = yield call(
      getApiSagaCount
    )

    if (sagaCount && err === undefined) {
      yield put(addSagaCount({ sagaCount }))
    } else {
      console.error('GET_SAGA_COUNT API response error')
    }
  }
}
