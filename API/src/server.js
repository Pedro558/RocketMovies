const express = require('express')
const app = express()
app.use(express.json())


const AppError = require('./utils/AppError')
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



app.get('/', (req, res)=>{
  res.send('Hello world')
})

app.listen(3333, ()=>{
  console.log('Server is listening on port 3333');
})