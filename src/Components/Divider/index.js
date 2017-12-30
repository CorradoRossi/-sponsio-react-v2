import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
position: absolute;
bottom: 1410px;
width: 100%;
height: 5vw;
`

const Divider = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon fill="#3a7bd5" points="0,100 100,0 100,100"/>
  </Svg>
)

export default Divider
