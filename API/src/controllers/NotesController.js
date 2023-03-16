const knex = require('../database')

class NotesController{
  async create(req, res){
    const { title, description, rating, tags } = req.body
    const { user_id } = req.params

    const note_id = await knex('movieNotes').insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name =>{
      return{
        note_id,
        user_id,
        name
      }
    })

    await knex('movieTags').insert(tagsInsert)

    return res.json()
  }
}

module.exports = NotesController