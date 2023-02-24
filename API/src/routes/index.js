const { Router } = require('express')
const routes = Router()

const example = (req, res) =>{
  res.send('hello example')
}

routes.use('/', example);

module.exports = routes