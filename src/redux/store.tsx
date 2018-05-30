import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware
} from 'redux'
import logger from 'redux-logger'

const middlewares: Middleware[] = []
if (process.env.NODE_ENV !== 'production') middlewares.push(logger)

export default createStore(combineReducers({}), applyMiddleware(...middlewares))
