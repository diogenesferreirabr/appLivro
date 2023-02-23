const { response } = require("express")

class ClienteController {
    static rotas(app) {
        app.get('/Cliente', controllerclientes.listarCliente) // chama a rota GET
    

        //POST 
        app.post('./Cliente', controllerclientes.CadastrarCliente) // chama a rota POST
        }

        //GET
    static listarCliente(req, res) {
        res.send("ROTA GET DO CLIENTE ATIVADA")
    }    

    //POST
    static CadastrarCliente(req, res) {
        res.send("ROTA POST DO CLIENTE ATIVADA")
      }
    }



module.exports = controlerclientes
