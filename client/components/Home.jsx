import React from 'react'
import {Link} from 'react-router-dom'

function Home () {
  return (
    <div>
      <h1>Users</h1>
      <Link to='/users'>User List</Link>
      <br/>
      <Link to='/users/adduser'>Add User</Link>
    </div>
  )
}
export default Home
