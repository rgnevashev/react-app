import React from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'

import { authSetToken } from '../actions'

const Home = ({ auth, login }) => (
  <div>
    {console.log(auth)}
    <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
    <h2>Welcome to React</h2>
    <RaisedButton label="Default" onTouchTap={() => login()} />
  </div>
)

export default connect(
  state => state,
  dispatch => ({
    login() {
      dispatch(authSetToken('test'))
    }
  })
)(Home)
