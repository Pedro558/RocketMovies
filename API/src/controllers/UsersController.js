const AppError = require('../utils/AppError')
const knex = require('../database')
const {  hash, compare } = require('bcrypt')

class UsersController {
  async index(req, res){
    const users = await knex('users')
    return res.json(users)
  }

  async create(req, res){
      const { name, email, password } = req.body
      try{
        const checkUserExists = await knex('users')
        .where('email', email)
        .first()
  
        if(checkUserExists){
          throw new AppError('Este email já está em uso')
        }
    
        const hashedPassword = await hash(password, 8)
    
        await knex('users').insert({
          name: name,
          email: email,
          password: hashedPassword
        })
    
        return res.json(201).json()
      } catch(err){
        console.error(err)
        return res.status(500).json({ 
          error: 'Erro ao criar usuário' 
        });
      }
    }
  
  }

module.exports = UsersController