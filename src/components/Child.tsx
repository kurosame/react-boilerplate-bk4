import {
  addCount,
  getSagaCount,
  ICounterActions,
  ICounterState
} from '@/modules/counter'
import { IStates } from '@/modules/states'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Action } from 'redux-actions'
import styled from 'styled-components'

interface IProps {
  state: { counter: ICounterState }
  actions: Pick<ICounterActions, 'addCount' | 'getSagaCount'>
}

export const Child = (props: IProps) => (
  <Div>
    <div>
      <span data-test="count">{props.state.counter.count}</span>
      <button data-test="add-count" onClick={() => props.actions.addCount()}>
        ADD
      </button>
    </div>
    <div>
      <span data-test="saga-count">{props.state.counter.sagaCount}</span>
      <button
        data-test="add-saga-count"
        onClick={() => props.actions.getSagaCount()}
      >
        ADD
      </button>
      ※redux-saga sample
    </div>
  </Div>
)

const Div = styled.div`
  color: white;
  background-color: blue;
`

export default connect(
  (states: IStates) => ({ state: { counter: states.counter } }),
  (dispatch: Dispatch) => ({
    actions: {
      addCount: bindActionCreators<Action<ICounterState>, typeof addCount>(
        addCount,
        dispatch
      ),
      getSagaCount: bindActionCreators<
        Action<ICounterState>,
        typeof getSagaCount
      >(getSagaCount, dispatch)
    }
  })
)(React.memo(Child))
