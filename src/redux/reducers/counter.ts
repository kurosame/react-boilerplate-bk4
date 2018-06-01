import { handleActions, Action, Reducer } from 'redux-actions'
import { State } from '@/redux/state/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/redux/types'

const initialState: State = {
  count: 0,
  axiosCount: 0,
  asyncAwaitCount: 0
}

export const counter: Reducer<State, State> = handleActions(
  {
    [ADD_VALUE]: (state: State, action: Action<State>): State => {
      return {
        ...state,
        count: state.count + (action.payload ? action.payload.count : 0)
      }
    },
    [AXIOS_SAMPLE]: (state: State, action: Action<State>): State => {
      return {
        ...state,
        axiosCount:
          state.axiosCount + (action.payload ? action.payload.axiosCount : 0)
      }
    },
    [ASYNC_AWAIT_SAMPLE]: (state: State, action: Action<State>): State => {
      return {
        ...state,
        asyncAwaitCount:
          state.asyncAwaitCount +
          (action.payload ? action.payload.asyncAwaitCount : 0)
      }
    }
  },
  initialState
)
