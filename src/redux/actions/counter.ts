import { ADD_VALUE, SAGA_SAMPLE } from '@/redux/types'
import { Action, ActionFunctionAny, createActions } from 'redux-actions'

export interface IActions {
  addValue: ActionFunctionAny<Action<{}>>
  sagaSample: ActionFunctionAny<Action<{ sagaCount: number }>>
}

export const { addValue, sagaSample } = createActions(ADD_VALUE, SAGA_SAMPLE)
