import { ICounterActions, ICounterState } from '@/modules/counter'

export interface IActions {
  counter: ICounterActions
}

export interface IStates {
  counter: ICounterState
}
