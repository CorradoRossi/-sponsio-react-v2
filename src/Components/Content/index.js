import React from 'react'
import styled from 'styled-components'

const Feature = styled.div`
grid-column: span 12;
text-align: center;
background: #1fa2ff;
`

const Text = styled.div`
padding-left: 20%;
padding-right: 20%;
padding-bottom: 5%;
`

const Content = () => (
  <Feature>
    <Text>
      <h1>Help Is A Text Away</h1>
      <p>Dealing with addiction is incredibly challenging. We believe that people who are making an effort deserve every bit of help that they can get. The difference between a relapse and another successful day can be a simple as a few words of encouragement at the right time. So when someone is struggling they should know that
      no matter what there is someone available who's willing to listen.</p>
    </Text>
  </Feature>
)

export default Content
