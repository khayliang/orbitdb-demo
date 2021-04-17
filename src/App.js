import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import NoMatch from "./pages/NoMatch"
import { OrbitProvider } from "./common/context/Orbit"
import routes from "./routes"

function App() {
  return (
    <>
      <OrbitProvider>
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route
                key={`route-${route.path}`}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route path="*" component={NoMatch} />
          </Switch>
        </Router>
      </OrbitProvider>
    </>
  )
}

export default App
