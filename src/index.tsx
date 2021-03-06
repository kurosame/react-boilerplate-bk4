import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '@/components/globals/Header'
import Parent from '@/pages/Parent'
import '@/modules/states'
import store from '@/store'

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
