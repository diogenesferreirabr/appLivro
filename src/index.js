//importar arquivo controllercliente
const controllercliente = require('./controllers/controller-cliente')
controllercliente.rota(app)

//importar arquivo controllercliente
const controllerlivro = require('./controllers/controllers-livros')
controllerlivro.rota(app)


// importar o express para a constante
const express = require('express') 

// instancia o express dentro de uma constante 
const app = express()

//porta que usaaremos...
const port = 3000

// funçao do express que...
app.listen(port, (req, res)) => {
    console.log(`servidor rodando na porta ${port}`)
}

// ROTA GET Cliente
app.get('/cliente',(req, res) => {
    re.send("rota GET do cliente ativada")
})

//ROTA GET Livro
app.get('/livro',(req, res) => {
    res.send("rota GET do livro criada")
})


