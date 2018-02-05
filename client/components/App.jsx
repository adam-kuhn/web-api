import React from 'react'
import request from 'superagent'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import UserList from './UserList'
import Profile from './Profile'
import AddUser from './AddUser'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
    this.refreshUserList = this.refreshUserList.bind(this)
  }

  componentDidMount () {
    this.refreshUserList()
  }
  refreshUserList () {
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
            <Route path='/' component={Home} />
            <Route exact path='/users' render={() => {
              return <UserList users={this.state.users} />
            }} />
            <Switch>
              <Route path='/users/adduser' render={() => {
                return <AddUser refresh={this.refreshUserList} />
              }} />

              <Route path='/users/:id' render={(props) => {
                return <Profile users={this.state.users} {...props} />
              }}/>
            </Switch>

          </div>
        </Router>
      </div>
    )
  }
}

export default App
