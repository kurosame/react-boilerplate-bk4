import Parent from '@/pages/Parent'
import { shallow } from 'enzyme'
import React from 'react'

const wrapper = shallow(<Parent />)

test('Match the snapshot', () => {
  expect(wrapper.debug()).toMatchSnapshot()
})
