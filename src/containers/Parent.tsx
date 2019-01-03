import Child from '@/components/Child'
import React from 'react'
import styled from 'styled-components'

const Parent = () => (
  <Div>
    Parent
    <Child />
  </Div>
)

const Div = styled.div`
  color: white;
  background-color: green;
`

export default Parent
