import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './welcome'
import OtherPage from './otherPage'

const routes = [
  { path: '/otherPage', component: OtherPage },
  { path: '/', component: Welcome },
]

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          const Component = route.component
          return (
            <Route path={route.path}>
              <Component />
            </Route>
          )
        })}
      </Switch>
    </Router>
  )
}
