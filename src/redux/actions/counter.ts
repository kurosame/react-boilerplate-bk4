import { createActions, ActionFunctionAny, Action } from 'redux-actions'
import { ADD_VALUE, SAGA_SAMPLE } from '@/redux/types'

export type Actions = {
  addValue: ActionFunctionAny<Action<{}>>
  sagaSample: ActionFunctionAny<Action<{ sagaCount: number }>>
}

export const { addValue, sagaSample } = createActions(ADD_VALUE, SAGA_SAMPLE)
