import { ADD_SAGA_COUNT, GET_SAGA_COUNT } from '@/modules/counter'
import { getApiSagaCount, getSagaCount } from '@/sagas/counter'
import moxios from 'moxios'
import { call, put, take } from 'redux-saga/effects'

let spyErr: jest.SpyInstance

beforeEach(() => {
  moxios.install()
  spyErr = jest.spyOn(console, 'error')
})
afterEach(() => {
  moxios.uninstall()
  spyErr.mockReset()
})

describe('Run the getApiSagaCount', () => {
  test('Return the sagaCount when resolved', async () => {
    moxios.stubRequest('/api', {
      status: 200,
      response: { sagaCount: 2 }
    })

    expect(await getApiSagaCount()).toEqual(2)
    expect(console.error).not.toBeCalled()
  })

  test('Output the console.error when rejected', async () => {
    moxios.stubRequest('/api', {
      status: 400
    })

    expect(await getApiSagaCount()).toEqual(0)
    expect(console.error).toBeCalled()
    expect(spyErr.mock.calls[0][0]).toEqual('GET_SAGA_COUNT API response error')
  })
})

describe('Run the getSagaCount', () => {
  test('Call the put', () => {
    const saga = getSagaCount()

    let res = saga.next()
    expect(res.value).toEqual(take(GET_SAGA_COUNT))

    res = saga.next()
    expect(res.value).toEqual(call(getApiSagaCount))

    res = saga.next()
    const addSagaCountMock: jest.Mock = jest
      .fn()
      .mockReturnValue({
        type: ADD_SAGA_COUNT,
        payload: { sagaCount: undefined }
      })
    expect(res.value).toEqual(put(addSagaCountMock()))

    res = saga.next()
    expect(res.value).toEqual(take(GET_SAGA_COUNT))
  })
})
