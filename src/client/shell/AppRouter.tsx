import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Home from 'screens/Home'
import Projects from 'screens/Projects'
import 'sass/base.sass'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Redirect to="/" from="*" />
      </Switch>
    </Router>
  )
}

export default AppRouter
