const { Router } = require('express')
const usersRoutes = Router()

const UsersController = require('../controllers/UsersController')
const users = new UsersController

usersRoutes.get('/', users.index)
usersRoutes.post('/', users.create)

module.exports = usersRoutes