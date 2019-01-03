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
import styled from 'styled-components'

interface IProps {
  state: ICounterState
  actions: ICounterActions
}

export const Child = (props: IProps) => (
  <Div>
    <div>
      <span data-test="count">{props.state.count}</span>
      <button data-test="add-count" onClick={() => props.actions.addCount()}>
        ADD
      </button>
    </div>
    <div>
      <span data-test="saga-count">{props.state.sagaCount}</span>
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
  (states: IStates) => ({ state: states.counter }),
  (dispatch: Dispatch) => ({
    actions: {
      addCount: bindActionCreators(addCount, dispatch),
      getSagaCount: bindActionCreators(getSagaCount, dispatch)
    }
  })
)(Child)
