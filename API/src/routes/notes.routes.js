const { Router } = require('express')
const notesRoutes = Router()

const ensureAuthenticated = require('../middlewares/ensureAutheticated')
const NotesController = require('../controllers/NotesController')

const notesController = new NotesController
notesRoutes.use(ensureAuthenticated)

notesRoutes.post('/:user_id', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)
notesRoutes.get('/', notesController.index)

module.exports = notesRoutes