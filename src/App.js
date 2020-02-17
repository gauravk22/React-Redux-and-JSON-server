import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import "./App.css"
import { loadPosts } from "./actions/ActionCreators"
import Navbar from "./Components/Navbar"
import Posts from "./Components/Posts"
import Favourites from "./Components/Favourites"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/page1">
            {" "}
            <Posts />
          </Route>
          <Route path="/page2">
            <Favourites />
          </Route>
          <Redirect to="/page1" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
