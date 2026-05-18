var dashModel = require("../models/dashModel");

function buscarDadosGrafico(req, res) {

    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {

        res.status(400).send("O id do usuário está undefined!");

    } else {

        dashModel.buscarDadosGrafico(id_usuario)
            .then(function(resultado) {

                res.json(resultado);

            }).catch(function(erro) {

                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar os dados do gráfico! Erro: ",
                    erro.sqlMessage
                );

                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarPesoAtual(req, res) {

    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {

        res.status(400).send("O id do usuário está undefined!");

    } 
    else if (peso == undefined) {

        res.status(400).send("O id do usuário está undefined!");

    } 
    else {

        dashModel.buscarPesoAtual(id_usuario)
            .then(function(resultado) {

                res.json(resultado);
                console.log(resultado);

            }).catch(function(erro) {

                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar os dados do gráfico! Erro: ",
                    erro.sqlMessage
                );

                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarDadosGrafico,
    buscarPesoAtual
};