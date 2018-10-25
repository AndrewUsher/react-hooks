import React from 'react'
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
  `
}

const Header = (props) => <Styled.Header {...props}>React Hooks</Styled.Header>


export default Header