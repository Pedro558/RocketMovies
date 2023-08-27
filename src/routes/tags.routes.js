const { Router } = require('express')
const tagsRouter = Router()

const TagsController = require('../controllers/TagsController')

const ensureAuthenticated = require('../middlewares/ensureAutheticated')

const tagsController = new TagsController()

tagsRouter.get('/', ensureAuthenticated,tagsController.index)

module.exports = tagsRouter