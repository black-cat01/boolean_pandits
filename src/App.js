import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './cmp/Home'
import Auth from './cmp/Auth'
import Courses from './cmp/Courses'
import Protected from './cmp/Protected'
import Nav from './cmp/Nav'

function App() {

  return(
    <Router>
      <Nav />
      <div className="App">
      
        <Switch>
          <Route exact path="/">
          <Auth />
          </Route>
          <Route exact path="/courses">
            <Protected cmp={Courses}/>
          </Route>
          <Route exact path="/home">
            <Protected cmp={Home}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )

}

export default App