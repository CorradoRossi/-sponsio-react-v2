import React, {Component} from 'react'
import styled from 'styled-components'

const Mycard = styled.div`
background: linear-gradient(to bottom, #1fa2ff, #3a7bd5);
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 5px;

:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

const Container = styled.div`
padding: 2px 16px;
`

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Mycard>
        <Container>
          <h2><b>{this.props.h2text}</b></h2>
          <p>{this.props.ptext}</p>
          <p>{this.props.p2text}</p>
        </Container>
      </Mycard>
    );
  }
}

export default Card
