import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar/navbar.component'
import Main from './components/layout/main/main.component'
import Configurator from './components/layout/configurator/configurator.component'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/stories" exact component={Main} />
          <Route path="/solutions" exact component={Configurator} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
