import React, { PropTypes } from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'

export class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  onLogin = () => {
    const { dispatch } = this.props

    dispatch(actions.startLogin())
  }

  render () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with GitHug account below</p>
              <button className="button" onClick={this.onLogin}>Login With GitHub</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(Login)