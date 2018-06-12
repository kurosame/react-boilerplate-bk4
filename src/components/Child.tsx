import { IActions, IState } from '@/modules/counter'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  state: IState
  actions: IActions
}

export class Child extends React.Component<IProps> {
  public render() {
    return (
      <Div>
        <div>
          <span className="count">{this.props.state.count}</span>
          <button
            className="add-count"
            onClick={() => this.props.actions.addCount()}
          >
            ADD
          </button>
        </div>
        <div>
          <span className="saga-count">{this.props.state.sagaCount}</span>
          <button
            className="add-saga-count"
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
