const { Router } = require('express')

const usersRoutes = Router()

usersRoutes.get('/', (req, res)=>{
  res.send('i am users get route')
})

module.exports = usersRoutes