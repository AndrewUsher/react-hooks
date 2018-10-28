import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styled = {
  Header: styled.header`
    background-color: ${props => props.theme.primaryColor};
    color: #fff;
    font-family: ${props => props.theme.primaryFont};
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 0.2px;
    padding: 10px;
    text-align: center;

    a {
      text-decoration: none;
      color: #fefefe;

      &:hover {
        text-decoration: underline;
      }
    }
  `
}

const Header = props => (
  <Styled.Header {...props}>
    <Link to="/">React Hooks</Link>
  </Styled.Header>
)

export default Header
