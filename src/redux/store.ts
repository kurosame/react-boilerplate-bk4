import { counter } from '@/redux/reducers/counter'
import rootSaga from '@/redux/sagas/counter'
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware
} from 'redux'
import logger from 'redux-logger'
import saga from 'redux-saga'

const sagaMiddleware = saga()
const middlewares: Middleware[] = [sagaMiddleware]
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

export default createStore(
  combineReducers<any>({ counter }),
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)
