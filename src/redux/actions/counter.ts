import { createActions, ActionFunctionAny, Action } from 'redux-actions'
import { ADD_VALUE } from '@/redux/types'
import { State } from '@/redux/state/counter'

export type Actions = {
  addValue: ActionFunctionAny<Action<{ count: number }>>
}

export const { addValue } = createActions({
  [ADD_VALUE]: (): { count: number } => {
    return { count: 1 }
  }
})
