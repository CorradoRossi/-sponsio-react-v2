import React from 'react'
import styled from 'styled-components'
import Cardbg from '../../images/card-bg.svg'

const Menu = styled.div`
color: #ffffff;
text-align: center;
grid-column: span 6;
padding: 120px 40px 0 120px;
background: linear-gradient(to top, #00c6ff, #0072ff);

h1 {
  font-size: 9rem;
  margin-top: 10%;
  line-height: 14%;
}

span {
  font-size: 7.2rem;
  font-family: 'Josefin Slab', sans-serif;
  line-height: 0px;
}

h2 {
  margin: -5%;
}
`

const Stripebg = styled.img`
position: absolute;
transform: scale(1.5) rotate(.992turn);
left: 50px;
top: -65px;
`

const HeroLeft = () => (
  <Menu>
    <Stripebg src={Cardbg}/>
    <h1>sponsio</h1>
    <h1><span>textline</span></h1>
    <h2>Sponsio is a platform for connecting people in need with people who can help. A recovery tool for a digital age. </h2>
  </Menu>
)

export default HeroLeft
