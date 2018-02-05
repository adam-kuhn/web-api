import React from 'react'
import request from 'superagent'

class AddUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleClick (evt) {
    request
      .post('/users/adduser')
      .set('Content-Type', 'application/json')
      .send(this.state)
      .then(() => {
        this.props.refresh()
      })
  }

  render () {
    return (
      <div>
        <form>
          <div>
          Name: <input name='name' />
            <br/>
          email: <input name='email' />
          </div>
          <button type='button' >Add User</button>
        </form>
      </div>
    )
  }
}
export default AddUser
// onChange={this.handleChange}
// onClick={this.handleClick}
