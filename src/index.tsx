import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Parent from '@/containers/Parent'
import store from '@/redux/store'
import 'normalize.css/normalize.css'

render(
  <Provider store={store}>
    <Parent />
  </Provider>,
  document.getElementById('app') as HTMLElement
)
