var perfilModel = require("../models/perfilModel");

function autenticar(req, res) {
    var id_usuario = req.body.usuarioServer;

    if (id_usuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        usuarioModel.autenticar(id_usuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].id_usuario,

                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Usuário não encontrado!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro na autenticação! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var perfilId = req.body.perfilServer;
    var id_usuario = req.body.usuarioServer;
    var peso = req.body.pesoServer;
    var altura = req.body.alturaServer;
    var nome = req.body.nomeServer;

    // Faça as validações dos valores
    if (perfilId == undefined) {
        res.status(400).send("Seu perfilId está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo perfilModel.js
        perfilModel.cadastrar(perfilId, id_usuario, peso, altura, nome)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro no perfil! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}