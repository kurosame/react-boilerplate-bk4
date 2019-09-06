import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react'
import Child from '@/components/Child'
import store from '@/store'

storiesOf('Child', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <Child />)
