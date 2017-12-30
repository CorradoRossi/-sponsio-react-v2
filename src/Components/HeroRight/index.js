import React from 'react'
import styled from 'styled-components'
import IphoneImage from '../../images/iphone_text.png'
import Cardbgr from '../../images/bg-right.svg'

const Content = styled.div`
grid-column: span 6;
padding-left: 25%;
padding-top: 15%;
background: linear-gradient(to top, #00c6ff, #0072ff);
`
const Bgr = styled.img`
position: absolute;
right: 50px;
top: 470px;
transform: scale(1.5)rotate(.991turn);
`
const Ipi = styled.img`
transform: rotate(.99turn);
z-index: 1;
`

const HeroRight = () => (
  <Content>
    <Bgr src={Cardbgr} alt="bgr"/>
    <Ipi src={IphoneImage} alt="Iphone"/>
  </Content>
);

export default HeroRight
