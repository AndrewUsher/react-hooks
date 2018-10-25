import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Header from './Header'
import Home from './Home'
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
