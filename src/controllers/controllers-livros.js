const { response } = require("express")

class LivroController {
    static rotas(app) {
        app.get('/Livro', (req, res) => {
            res.send("ROTA GET do Livro ativada")
    })

    }
}    

module.exports = controlerLivros 
