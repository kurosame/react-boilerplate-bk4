import { IState } from '@/redux/state/counter'
import { ADD_VALUE, SAGA_SAMPLE } from '@/redux/types'
import { Action, handleActions, Reducer } from 'redux-actions'

const initialState: IState = {
  count: 0,
  sagaCount: 0
}

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
