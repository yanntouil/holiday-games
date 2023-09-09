import React from "react"
import { Redirect, Route, Switch } from "wouter"
import Home from "./pages"
import Game1 from "./pages/encore"

/**
 * App
 */
const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/encore">
        <Game1 />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default App
