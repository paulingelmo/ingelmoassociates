import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Home from 'screens/Home'
import Clients from 'screens/Clients'
import 'sass/base.sass'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
        <Redirect to="/" from="*" />
      </Switch>
    </Router>
  )
}

export default AppRouter
