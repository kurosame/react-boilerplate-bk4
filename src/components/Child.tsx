import React from 'react'
import { State } from '@/redux/state/counter'

interface Props {
  state: State
}

export class Child extends React.Component<Props> {
  render() {
    return (
      <div>
        Welcome to my site !
        <p>score: {this.props.state.count}</p>
        aaaaaaaa
      </div>
    )
  }
}
