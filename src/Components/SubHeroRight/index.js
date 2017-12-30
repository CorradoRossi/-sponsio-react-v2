import React from 'react'
import styled from 'styled-components'
import Card from '../Card'

const Cardright = styled.div`
z-index: 0;
grid-column: span 6;
background: linear-gradient(to top, #1fa2ff, #3a7bd5);
color: #ffffff;
padding: 20px 80px 20px 20px;
text-align: center;
`

const SubHeroRight = () => (
  <Cardright>
    <Card
      h2text="Free And Anonymous"
      ptext="Some people know they need support and encouragement but are afraid to come forward in their community for fear of stigma or repercussion. When you text through Sponsio you can decide whether to remain anonymous or not. You can communicate in any way you feel is right."
      p2text="Sponsio is just a middleman. There are real people on the other end of the line who know what you're going through. It's a support system for the digital age."
    />
  </Cardright>
)

export default SubHeroRight
