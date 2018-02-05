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

  // handleClick (e) {
  //   request
  //     .post('/users')
  //     .set('Content-Type', 'application/json')
  //     .send(this.state)

  //     .then(() => {
  //       console.log(this.state)
  //     })
  // }
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
