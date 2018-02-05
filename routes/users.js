const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.send({users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/adduser', (req, res) => {
  const newUser = req.body
  db.addUser(newUser) 
    .then(() => {
       res.status(200).send({})
    })
  
  .catch(err => {
    res.status(500).send('DATABASE ERROR : ' + err.message)
  })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


module.exports = router
