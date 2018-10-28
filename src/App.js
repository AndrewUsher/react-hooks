import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import GeolocationWatch from './GeolocationWatch'
import GeolocationStatic from './GeolocationStatic'
import Header from './Header'
import Home from './Home'
import Locale from './Locale'
import Motion from './Motion'
import MouseMove from './MouseMove'
import Orientation from './Orientation'
import Resize from './Resize'
import UseReducerExampleSimple from './UseReducerExampleSimple'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.primaryFont};
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }

  section {
    border: 1px solid #f5f5f5;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 20px auto 0 auto;
    max-width: 1200px;
    padding: 10px 30px;
    text-align: center;
    transition: all 400ms;
    width: 90%;

    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
      transform: translateY(-3px);
    }

    ul {
      margin: 0 auto;
      text-align: left;
    }
  }
`

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider
          theme={{ primaryColor: '#26baee', primaryFont: 'Raleway' }}
        >
          <Fragment>
            <GlobalStyle />
            <Header />
            <Switch>
            <Route exact component={GeolocationWatch} path="/geolocation-watch" />
              <Route exact component={Home} path="/" />
              <Route exact component={GeolocationStatic} path="/geolocation-static" />
              <Route exact component={Locale} path="/locale" />
              <Route exact component={MouseMove} path="/mousemove" />
              <Route exact component={Motion} path="/motion" />
              <Route exact component={Orientation} path="/orientation" />
              <Route exact component={Resize} path="/resize" />
              <Route exact component={UseReducerExampleSimple} path="/usereducer-simple" />
            </Switch>
          </Fragment>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
