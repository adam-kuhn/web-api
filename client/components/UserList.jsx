import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

class UserList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userData: []
    }
  }

  render () {
    return (
      <ul>
        {this.props.users.map(user => {
          return (
            <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
          )
        })}
      </ul>
    )
  }
}
export default UserList
