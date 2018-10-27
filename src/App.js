import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle';
import GeolocationWatch from './Geolocation/Watch'
import GeolocationStatic from './Geolocation/Static'
import Header from './Header'
import Home from './Home'
import Locale from './Locale'
import Motion from './DeviceMotion'
import Orientation from './DeviceOrientation'
import Resize from './WindowResize'
import MouseMove from './MouseMove'



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
            </Switch>
          </Fragment>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
