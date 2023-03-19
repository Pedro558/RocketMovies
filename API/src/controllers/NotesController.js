const knex = require('../database')
const AppError = require('../utils/AppError')

class NotesController{
  async create(req, res){
    const { title, description, rating, tags } = req.body
    const { user_id } = req.params
    const values = Object.values(req.body)
    const errors = []

    try{
      function checkValue(value) {
        return (typeof value === 'string' && !value.trim());
      }

      for (const value of values) {
        if (checkValue(value)) {
          errors.push('Algum dos valores está vazio, verifique e tente novamente');
          break;
        }
      }
  
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      const noteExists = await knex('movieNotes')
      .select('*')
      .where({
        title: title,
        user_id: user_id
      })
      .first()

      if(noteExists){
        return res.status(400).json({ errors: ['Já existe uma nota com o mesmo título para o usuário'] });
      }

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

    } catch(err){
      throw new AppError('Erro na inserção de dados no banco de dados')
    }
  }
  
  async show(req, res) {
    const values = Object.values(req.body);
    const errors = [];
  
  try{
      function checkValue(value) {
      return (typeof value === 'string' && !value.trim());
    }
  
    for (const value of values) {
      if (checkValue(value)) {
        errors.push('Algum dos valores está vazio, verifique e tente novamente');
        break;
      }
    }
  
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    res.json(values);

  } catch(err){
    console.error(err)
  }
  
  }

  }

module.exports = NotesController