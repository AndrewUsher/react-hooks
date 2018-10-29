import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GeolocationWatch from './Geolocation/Watch'
import GeolocationStatic from './Geolocation/Static'
import Home from './Home'
import Locale from './Locale'
import Memoize from './UseMemo'
import Motion from './DeviceMotion'
import Orientation from './DeviceOrientation'
import Resize from './WindowResize'
import MouseMove from './MouseMove'
import PreviousState from './PreviousState'
import Fetch from './Fetch'

const Routes = () => (
  <Switch>
    <Route exact component={GeolocationWatch} path="/geolocation-watch" />
    <Route exact component={Fetch} path="/fetch" />
    <Route exact component={PreviousState} path="/previous-state" />
    <Route exact component={Home} path="/" />
    <Route exact component={GeolocationStatic} path="/geolocation-static" />
    <Route exact component={Locale} path="/locale" />
    <Route exact component={Memoize} path="/memoize" />
    <Route exact component={MouseMove} path="/mousemove" />
    <Route exact component={Motion} path="/motion" />
    <Route exact component={Orientation} path="/orientation" />
    <Route exact component={Resize} path="/resize" />
  </Switch>
)

export default Routes
