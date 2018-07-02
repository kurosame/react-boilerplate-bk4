import Child from '@/components/Child'
import { mount } from 'enzyme'
import React from 'react'

const state = { count: 147, sagaCount: 258 }
const actions = {
  addCount: jest.fn(),
  addSagaCount: jest.fn(),
  getSagaCount: jest.fn()
}

const wrapper = mount(<Child state={state} actions={actions} />)

test('Data binding from the props.count to count', () => {
  expect(wrapper.find('[data-test="count"]').text()).toEqual('147')
})

test('Click the add-count will call the addCount', () => {
  expect(actions.addCount.mock.calls[0]).toBeUndefined()

  wrapper.find('[data-test="add-count"]').simulate('click')

  expect(actions.addCount).toBeCalled()
  expect(actions.addCount.mock.calls[0]).toEqual([])
})

test('Data binding from the props.sagaCount to sagaCount', () => {
  expect(wrapper.find('[data-test="saga-count"]').text()).toEqual('258')
})

test('Click the add-saga-count will call the getSagaCount', () => {
  expect(actions.getSagaCount.mock.calls[0]).toBeUndefined()

  wrapper.find('[data-test="add-saga-count"]').simulate('click')

  expect(actions.getSagaCount).toBeCalled()
  expect(actions.getSagaCount.mock.calls[0]).toEqual([])
})

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
