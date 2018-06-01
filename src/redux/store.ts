import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware
} from 'redux'
import logger from 'redux-logger'
import { counter } from '@/redux/reducers/counter'

const middlewares: Middleware[] = []
if (process.env.NODE_ENV !== 'production') middlewares.push(logger)

export default createStore(
  combineReducers<any>({ counter }),
  applyMiddleware(...middlewares)
)
