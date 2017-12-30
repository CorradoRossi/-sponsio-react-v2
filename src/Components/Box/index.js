import React, {Component} from 'react'
import styled from 'styled-components'

const Boxes = styled.div`
background: linear-gradient(to bottom, #1fa2ff, #3a7bd5);
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 5px;
height: 160px;
width: 160px;
margin: 5px;

:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

const Avatar = styled.img`
margin-top: 20px;
border-radius: 50%;
`

class Box extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Boxes>
        <div className="boxtainer">
          <Avatar src={this.props.avatar} alt="avatar"/>
          <p>{this.props.ptext}</p>
        </div>
      </Boxes>
    );
  }
}

export default Box
