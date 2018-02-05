import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'

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
      [evt.target.name]: evt.target.value,
    })
  }

  handleClick (evt) {
    request
      .post('/users/adduser')
      .set('Content-Type', 'application/json')
      .send(this.state)
      .then(() => {
        this.props.refresh()
        // this.props.history.push('/users')
        })
  }

  render () {
    return (
      <div>
        <form>
          <div>
            Name: <input name='name' 
              onChange={this.handleChange} />
          </div>
            <br/>
            <div>
            email: <input name='email' 
              onChange={this.handleChange} />
          </div>
          <button type='button' onClick={this.handleClick}
 >Add User</button>
        </form>
      </div>
    )
  }
}
export default AddUser


