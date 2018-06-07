import { handleActions, Action, Reducer } from 'redux-actions'
import { State } from '@/redux/state/counter'
import { ADD_VALUE, SAGA_SAMPLE } from '@/redux/types'

const initialState: State = {
  count: 0,
  sagaCount: 0
}

export const counter: Reducer<State, State> = handleActions(
  {
    [ADD_VALUE]: (state: State): State => {
      return { ...state, count: state.count + 1 }
    },
    [SAGA_SAMPLE]: (state: State, action: Action<State>): State => {
      return {
        ...state,
        sagaCount:
          state.sagaCount + (action.payload ? action.payload.sagaCount : 0)
      }
    }
  },
  initialState
)
