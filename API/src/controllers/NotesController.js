const knex = require('../database')

class NotesController{
  async index(req, res){
    return res.json({
      message: 'hey'
    })
  }
}

module.exports = NotesController