import {
  Action,
  ActionFunctionAny,
  createActions,
  handleActions,
  Reducer
} from 'redux-actions'

// Action types
const ADD_COUNT = 'ADD_COUNT'
const ADD_SAGA_COUNT = 'ADD_SAGA_COUNT'
export const GET_SAGA_COUNT = 'GET_SAGA_COUNT'

export interface IActions {
  addCount: ActionFunctionAny<Action<{}>>
  addSagaCount: ActionFunctionAny<Action<{ sagaCount: number }>>
  getSagaCount: ActionFunctionAny<Action<{}>>
}

export interface IState {
  count: number
  sagaCount: number
}

const initialState: IState = {
  count: 0,
  sagaCount: 0
}

export const { addCount, addSagaCount, getSagaCount } = createActions(
  ADD_COUNT,
  ADD_SAGA_COUNT,
  GET_SAGA_COUNT
)

export const counter: Reducer<IState, IState> = handleActions(
  {
    [ADD_COUNT]: (state: IState): IState => {
      return { ...state, count: state.count + 1 }
    },
    [ADD_SAGA_COUNT]: (state: IState, action: Action<IState>): IState => {
      return {
        ...state,
        sagaCount:
          state.sagaCount + (action.payload ? action.payload.sagaCount : 0)
      }
    }
  },
  initialState
)
