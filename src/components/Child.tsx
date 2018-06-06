import React from 'react'
import { State } from '@/redux/state/counter'
import { Actions } from '@/redux/actions/counter'
import styled from 'styled-components'

interface Props {
  state: State
  actions: Actions
}

export class Child extends React.Component<Props> {
  render() {
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
      </Div>
    )
  }
}

const Div = styled.div`
  color: white;
  background-color: blue;
  letter-spacing: 5px;
`
