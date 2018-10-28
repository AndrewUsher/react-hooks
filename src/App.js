import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Header from './Header'

import Routes from './Routes'

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={{ primaryColor: '#26baee', primaryFont: 'Raleway' }}>
      <Fragment>
        <GlobalStyle />
        <Header />
        <Routes />
      </Fragment>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
