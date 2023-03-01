const { response } = require("express")

const { bdLivro } = require('../estrutura/bd')

class LivroController {
    static rotas(app) {
        app.get('/Livro', (req, res) => {
            res.send("ROTA GET do Livro ativada")
    })

    }
    static buscarLivroGenero(req, res) {
        // Buscar o genero na lista de livros
    const livro = bdLivro.find(
        (livro) => livro.genero === req.params.email
        );

        //se o front nao for encontrado devolva um erro
        if (!livro) {
            res.sed("livro não encontrado");
            return;
        }
        //se o livro for encontrado devolva o livro
        res.semd(livro);
    }

    // deletar livro 
    static deletarLivro(req, res) {
        //busca o email na lista de Livros 
        const livro = Livro.find((livro ) => livro.nome ===
        req.params.email
        );
        // se o livro nao for encontado devolva um erro 
        if (!livro) {
            res.send("livro não encontrado");
            return
        }
        //se o livro for encontrado delete o livro 
        const index = liLivro.indexOf(livro);
        bdLivro.splice(index, 1);
        //devolva o livro deletado
        res.send({
            "mensagem: ": `o livro do nome ${livro.nome} foi deletado`,
        });


    }


}


module.exports = controlerLivros 
