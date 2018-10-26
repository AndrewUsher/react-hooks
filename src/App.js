import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GeolocationStatic from './GeolocationStatic'
import Header from './Header'
import Home from './Home'
import Locale from './Locale'
import Motion from './Motion'
import Orientation from './Orientation'
import Resize from './Resize'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={{ primaryColor: '#26baee', primaryFont: 'Raleway'}}>
          <div>
            <Header />
            <Switch>
              <Route exact component={Home} path="/" />
              <Route exact component={GeolocationStatic} path="/geolocation-static" />
              <Route exact component={Locale} path="/locale" />
              <Route exact component={Motion} path="/motion" />
              <Route exact component={Orientation} path="/orientation"/>
              <Route exact component={Resize} path="/resize" />
            </Switch>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
