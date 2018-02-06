import React from 'react'
import request from 'superagent'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
 
  componentDidMount () {
    const userId = this.props.match.params.id
    request
    // needed to set the URL to have the variable
      .get(`/users/${userId}`)
      .then(res => {
        this.setState({
          name: res.body.user.name,
          email: res.body.user.email
        })
      })
  }
  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleClick (evt) {
    const userId = this.props.match.params.id
    request
      .put('/users/' + userId)
      .set('Content-Type', 'application/json')
      .send(this.state)
      .then(() => {
        this.props.refresh()
      })
  }

  render () {
    // commented out works, but wanted to try the above code
    // const userId = Number(this.props.match.params.id)
    // let user = this.props.users.find(user => {
    //   return user.id === userId
    // })
    // user = user || {}
    return (
      <div>
        <h1> {this.state.name} </h1>
        <h3> {this.state.email} </h3>
        <h2>Edit data</h2>
        <form>
          <label>
          Name: <input name='name' onChange={this.handleChange} />
          </label>
          <label>
          Email: <input name='email' onChange={this.handleChange} />
          </label>
          <button type='button' onClick={this.handleClick}>Update</button>
        </form>
      </div>
    )
  }
}

export default Profile
