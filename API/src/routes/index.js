const express = require('express')
const routes = express.Router()

const usersRouter = require('./users.routes')
const notesRouter = require('./notes.routes')

routes.use('/users', usersRouter)
routes.use('/notes', notesRouter)

module.exports = routes