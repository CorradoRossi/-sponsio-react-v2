import React, { Component } from 'react'
import styled, {injectGlobal} from 'styled-components'
import Header from './Components/Header'
import HeroLeft from './Components/HeroLeft'
import HeroRight from './Components/HeroRight'
import Divider from './Components/Divider'
import SubHeroLeft from './Components/SubHeroLeft'
import SubHeroRight from './Components/SubHeroRight'
import Content from './Components/Content'
import CallToAction from './Components/CallToAction'
import Footer from './Components/Footer'

injectGlobal`
body {
  position: relative;
  font-family: 'Josefin Sans', serif;
  background-color: #0072ff;
  color: #ffffff;
}
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: 60px 673px 250px 250px 850px 60px;
`

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Wrapper>
        <Header/>
        <HeroLeft/>
        <HeroRight/>
        <Divider/>
        <SubHeroLeft/>
        <SubHeroRight/>
        <Content/>
        <CallToAction/>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
