const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser
}

function getUsers (testDb) {
  const db = testDb || connection
  return db('users').select()
}

function getUser (id, testDb) {
  const db = testDb || connection
  return db('users').where('id', id).first()
}

function addUser (user, testDb) {
  const db = testDb || connection
  return db('users')
    .insert({
      name: user.name,
      email: user.email
    })
}

function updateUser (user, id, testDb) {
  const db = testDb || connection
  console.log('update id', id)
  return db('users')
    .where('id', id)
    .update({
      name: user.name,
      email: user.email
    })
}
