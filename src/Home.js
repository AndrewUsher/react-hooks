import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styled = {
  Section: styled.section`
    padding-top: 20px;
    text-align: center;

    a {
      display: block;
      color: ${props => props.theme.primaryColor};
      font-size: 18px;
      font-family: ${props => props.theme.primaryFont};
      margin-bottom: 5px;
      text-decoration: none;
    }
  `
}
const Home = () => (
  <Styled.Section>
    <Link to="/resize">Resize</Link>
    <Link to="/locale">Locale</Link>
    <Link to="/motion">Motion</Link>
    <Link to="/orientation">Orientation</Link>
    <Link to="/geolocation-watch">Geolocation (watch)</Link>
  </Styled.Section>
)

export default Home