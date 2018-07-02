import { ICounterActions, ICounterState } from '@/modules/counter'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  state: ICounterState
  actions: ICounterActions
}

export default class Child extends React.Component<IProps> {
  public render() {
    return (
      <Div>
        <div>
          <span data-test="count">{this.props.state.count}</span>
          <button
            data-test="add-count"
            onClick={() => this.props.actions.addCount()}
          >
            ADD
          </button>
        </div>
        <div>
          <span data-test="saga-count">{this.props.state.sagaCount}</span>
          <button
            data-test="add-saga-count"
            onClick={() => this.props.actions.getSagaCount()}
          >
            ADD
          </button>
          ※redux-saga sample
        </div>
      </Div>
    )
  }
}

const Div = styled.div`
  color: white;
  background-color: blue;
`
