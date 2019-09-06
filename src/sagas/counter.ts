import axios, { AxiosError } from 'axios'
import { Action } from 'redux-actions'
import {
  call,
  put,
  take,
  TakeEffect,
  CallEffect,
  PutEffect
} from 'redux-saga/effects'
import { addSagaCount, GET_SAGA_COUNT, CounterState } from '@/modules/counter'

export function getApiSagaCount(): Promise<{
  sagaCount?: number
  err?: AxiosError
}> {
  return axios
    .get('/api')
    .then(res => ({ sagaCount: res.data.sagaCount }))
    .catch(err => ({ err }))
}

export function* getSagaCount(): IterableIterator<
  TakeEffect | CallEffect | PutEffect<Action<CounterState>>
> {
  while (true) {
    yield take(GET_SAGA_COUNT)
    const {
      sagaCount,
      err
    }: { sagaCount?: number; err?: AxiosError } = yield call(getApiSagaCount)

    if (sagaCount && err === undefined) {
      yield put(addSagaCount({ sagaCount }))
    } else {
      console.error('GET_SAGA_COUNT API response error')
    }
  }
}
