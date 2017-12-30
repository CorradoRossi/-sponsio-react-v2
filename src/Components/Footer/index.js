import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
grid-column: span 12;
text-align: center;
color: #ffffff;
font-size: .7em;
background: #0072ff;

p {
  padding-top: 15px;
}

a {
  text-decoration: none;
  color: #ffffff;
}
`

const Footer = () => (
  <Foot>
    <p>&copy; Sponsio built with &hearts; by <a href="http://motorossi.me">MoToRossi</a></p>
  </Foot>
)

export default Footer
