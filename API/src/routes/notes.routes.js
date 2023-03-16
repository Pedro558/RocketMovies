const { Router } = require('express')
const notesRoutes = Router()

const NotesController = require('../controllers/NotesController')
const notesController = new NotesController

notesRoutes.get('/', notesController.index)

module.exports = notesRoutes