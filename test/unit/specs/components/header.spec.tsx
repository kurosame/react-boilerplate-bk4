import Header from '@/components/globals/Header'
import { mount } from 'enzyme'
import React from 'react'

const wrapper = mount(<Header />)

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
