const express = require('express')
const app = express()

app.use(express.json())


app.get('/', (req, res)=>{
  res.send('Hello world')
})

app.listen(3333, ()=>{
  console.log('Server is listening on port 3333');
})