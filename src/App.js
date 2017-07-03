import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import Header from './components/Header'

import Home from './components/Home'
import About from './components/About'

class App extends React.Component {
  render() {
    return (
      <div>
        <Row className="align-items-stretch" style={{ height: '100vh' }} noGutters>
          <Col className="hidden-md-down" lg="3" xl="2" style={{ marginTop: 60 }}>
            Sidebar
          </Col>
          <Col md="12" lg="9" xl="10" style={{ marginTop: 60 }}>
            <Header />
            {/* <header>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </header>*/}
            <Container fluid>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Container>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
