import {
  Action,
  ActionFunctionAny,
  createActions,
  handleActions,
  Reducer
} from 'redux-actions'

// Action types
const ADD_VALUE = 'ADD_VALUE'
export const SAGA_SAMPLE = 'SAGA_SAMPLE'

export interface IActions {
  addValue: ActionFunctionAny<Action<{}>>
  sagaSample: ActionFunctionAny<Action<{ sagaCount: number }>>
}

export interface IState {
  count: number
  sagaCount: number
}

const initialState: IState = {
  count: 0,
  sagaCount: 0
}

export const { addValue, sagaSample } = createActions(ADD_VALUE, SAGA_SAMPLE)

export const counter: Reducer<IState, IState> = handleActions(
  {
    [ADD_VALUE]: (state: IState): IState => {
      return { ...state, count: state.count + 1 }
    },
    [SAGA_SAMPLE]: (state: IState, action: Action<IState>): IState => {
      return {
        ...state,
        sagaCount:
          state.sagaCount + (action.payload ? action.payload.sagaCount : 0)
      }
    }
  },
  initialState
)
