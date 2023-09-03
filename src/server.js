require('dotenv/config');
require('express-async-errors')

const migrationsRun = require("./database/sqlite/migrations");

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const uploadConfig = require('./configs/upload')
const AppError = require('./utils/AppError')

const app = express()

migrationsRun();

app.use(express.json())
app.use(cors())

app.use('/', routes)
app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))


app.use((error, req, res, next) =>{
  if(error instanceof AppError){
    return res.status(error.statusCode).json({
      message: error.message,
      status: "error"
    })
  }

  console.error(error)

  return res.status(500).json({
    message: "Internal server error",
    status: "error"
  })
})

const PORT = process.env.PORT || 3333

app.listen(PORT, ()=>{
  console.log(`Server is listening on port ${PORT}`);
})