const { response } = require("express")

class ClienteController {
    static rotas(app) {
        app.get('/Cliente', (req, res) => {
            res.send("ROTA GET do Cliente ativada")
    })

    }
}    

module.exports = controlerclientes
