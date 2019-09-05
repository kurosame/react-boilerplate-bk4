import { Reducer } from 'redux'
import {
  Action,
  ActionFunctionAny,
  createActions,
  handleActions
} from 'redux-actions'

// Action types
export const ADD_COUNT = 'ADD_COUNT'
export const ADD_SAGA_COUNT = 'ADD_SAGA_COUNT'
export const GET_SAGA_COUNT = 'GET_SAGA_COUNT'

export interface CounterActions {
  addCount: ActionFunctionAny<Action<CounterState>>
  addSagaCount: ActionFunctionAny<Action<CounterState>>
  getSagaCount: ActionFunctionAny<Action<CounterState>>
}

export interface CounterState {
  count: number
  sagaCount: number
}

const initialState: CounterState = {
  count: 0,
  sagaCount: 0
}

export const { addCount, addSagaCount, getSagaCount } = createActions<
  CounterState
>(ADD_COUNT, ADD_SAGA_COUNT, GET_SAGA_COUNT)

export const counter: Reducer<
  CounterState,
  Action<CounterState>
> = handleActions(
  {
    [ADD_COUNT]: (state: CounterState): CounterState => {
      return { ...state, count: state.count + 1 }
    },
    [ADD_SAGA_COUNT]: (
      state: CounterState,
      action: Action<CounterState>
    ): CounterState => {
      return {
        ...state,
        sagaCount: state.sagaCount + action.payload.sagaCount
      }
    }
  },
  initialState
)
