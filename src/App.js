import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App
