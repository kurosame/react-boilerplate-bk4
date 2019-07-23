import Header from '@/containers/common/Header'
import Parent from '@/containers/Parent'
import '@/modules/states'
import store from '@/store'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

render(
  <Provider store={store}>
    <>
      <Header />
      <Router>
        <Route path="/" component={Parent} exact />
      </Router>
    </>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
