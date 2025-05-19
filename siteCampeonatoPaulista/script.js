import express from 'express'
import path from 'path'


const app = express()

app.use(express.static('public'))

// Inicio 
app.get('/', function (req, res) {
  let end = path.resolve('./view/index.html')
  res.sendFile(end)
})


app.listen(2000, () => console.log("Funcionando na porta 2000"))