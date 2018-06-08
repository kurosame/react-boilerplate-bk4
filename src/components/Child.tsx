import { IActions } from '@/redux/actions/counter'
import { IState } from '@/redux/state/counter'
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
            className="add-value"
            onClick={() => this.props.actions.addValue()}
          >
            ADD
          </button>
        </div>
        <div>
          <span className="saga-count">{this.props.state.sagaCount}</span>
          <button
            className="saga-sample"
            onClick={() => this.props.actions.sagaSample()}
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
