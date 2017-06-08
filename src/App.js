import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'

import Home from './components/Home'
import About from './components/About'

class App extends React.Component {
  render() {
    return (
      <Container style={{ padding: 0 }} fluid>
        <Row style={{ alignItems: 'stretch', minHeight: '100vh' }} noGutters>
          <Col className="hidden-md-down">
            Sidebar
          </Col>
          <Col md="12" lg="10">
            <header>
              <Button color="default">&#9776;</Button>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </header>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
