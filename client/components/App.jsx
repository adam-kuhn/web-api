import React from 'react'
import request from 'superagent'
import {HashRouter as Router, Route} from 'react-router-dom'

import UserList from './UserList'
import Profile from './Profile'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    request
      .get('/users')
      .then(res => {
        this.setState({
          users: res.body.users
        })
      })
  }

  render () {
    return (
      <div>
        <Router>
          <div>

            <h1>Users</h1>
            <UserList users={this.state.users} />
            <Route path='/users/:id' render={(props) => {
              return <Profile users={this.state.users} {...props} />
            }}/>


          </div>
        </Router>
      </div>
    )
  }
}

export default App
