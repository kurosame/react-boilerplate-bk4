import { counter } from '@/modules/counter'
import { IStates } from '@/modules/index'
import rootSaga from '@/sagas/index'
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import saga from 'redux-saga'

const sagaMiddleware = saga()
const middlewares: Middleware[] = [sagaMiddleware]
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

export default createStore(
  combineReducers<IStates>({ counter }),
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)
