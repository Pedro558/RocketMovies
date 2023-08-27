const { Router } = require('express')
const ensureAuthenticated = require('../middlewares/ensureAutheticated')
const UsersController = require('../controllers/UsersController')
const multer = require('multer')
const UserAvatarController = require('../controllers/UserAvatarController')

const uploadConfig = require('../configs/upload')
const upload = multer(uploadConfig.MULTER)

const usersRoutes = Router()
const users = new UsersController()
const userAvatarController = new UserAvatarController()


usersRoutes.get('/', users.index)
usersRoutes.post('/', users.create)
usersRoutes.put('/', ensureAuthenticated,users.update)

usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update)

module.exports = usersRoutes