const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const users = require('./routes/users')

const server = express()

// Middleware
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

// Routes
server.use('/users', users)

module.exports = server
