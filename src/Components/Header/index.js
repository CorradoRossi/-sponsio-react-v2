import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
grid-column: span 12;
padding: 0 10% 0 10%;
background: #0072ff;
`

const Logo = styled.div`

 span {
  font-family: 'Josefin Slab', sans-serif;
}
`

const Numbers = styled.div`
  padding-left: 10%;
`

const List = styled.ul`
display: flex;
list-style-type: none;

li {
  padding-left: 1rem;
}

a {
  text-decoration: none;
  color: #ffffff;
}
`

const Header = () => (
  <Head>
    <Logo>
      <h3>SPONSIO<span>TEXTLINE</span></h3>
    </Logo>
    <Numbers>
      <h2>207-558-2084</h2>
    </Numbers>
    <div>
      <List>
        <li><a href="#">LEARN MORE</a></li>
        <li><a href="#">LOGIN</a></li>
        <li><a href="#">SIGNUP</a></li>
      </List>
    </div>
  </Head>
)

export default Header
