import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styled = {
  Section: styled.section`
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
    <Links />
  </Styled.Section>
)

const Links = () => (
  <Fragment>
    <Link to="/resize">Resize</Link>
    <Link to="/previous-state">Counter with Previous State</Link>
    <Link to="/fetch">Fetch</Link>
    <Link to="/mousemove">MouseMove</Link>
    <Link to="/locale">Locale</Link>
    <Link to="/motion">Motion</Link>
    <Link to="/orientation">Orientation</Link>
    <Link to="/geolocation-static">Geolocation (static)</Link>
    <Link to="/geolocation-watch">Geolocation (watch)</Link>
    <Link to="/memoize">useMemo Example</Link>
  </Fragment>
)

export default Home
