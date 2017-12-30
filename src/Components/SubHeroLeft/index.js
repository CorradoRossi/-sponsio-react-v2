import React from 'react'
import styled from 'styled-components'
import Card from '../Card'

const Cardleft = styled.div`
grid-column: span 6;
background: linear-gradient(to top, #1fa2ff, #3a7bd5);
color: #ffffff;
padding: 20px 20px 20px 80px;
text-align: center;
`

const SubHeroLeft = () => (
  <Cardleft>
    <Card
    h2text="Be A Supporter"
    ptext="Do you have experience with addiction and recovery? Have you or someone you know benefitted from the support of community? Would you like to be of service to someone in need?"
    p2text="It's important for people to feel like they have someone to talk to when they're struggling. Even if it's just a stranger who's been there. A supportive text to lend perspective can mean the difference between a relapse and a continued recovery."
    />
  </Cardleft>
);

export default SubHeroLeft
