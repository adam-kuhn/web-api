import React from 'react'
import request from 'superagent'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }

  render () {
    const userId = Number(this.props.match.params.id)
    let user = this.props.users.find(user => {
      return user.id === userId
    })
    user = user || {}
    return (
      <div>
        <h1> {user.name} </h1>
        <h3> {user.email} </h3>
      </div>
    )
  }
}

export default Profile
