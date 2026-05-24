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

function atualizarPeso(req, res) {

    var id_usuario = req.body.id_usuario;
    var peso = req.body.peso;
    var altura = req.body.altura;
    var meta = req.body.meta;

    if (id_usuario == undefined) {
        res.status(400).send("id_usuario está undefined");
    }
    else if (peso == undefined) {
        res.status(400).send("peso está undefined");
    }
    else if (altura == undefined) {
        res.status(400).send("altura está undefined");
    }
    else {

        dashModel.atualizarPeso(id_usuario, peso, altura)
            .then(function() {

                if (meta != undefined && meta > 0) {

                    return dashModel.atualizarMeta(id_usuario, meta);
                }

                return Promise.resolve();
            })

            .then(function() {

                res.status(200).json({
                    mensagem: "Peso e meta atualizados!"
                });

            })

            .catch(function(erro) {

                console.log(erro);
                console.log(
                    "\nHouve um erro ao atualizar! Erro:",
                    erro.sqlMessage
                );

                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarTreinoDoDia(req, res) {

    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {

        res.status(400).send("O id do usuário está undefined!");

    } else {

        dashModel.buscarTreinoDoDia(id_usuario)
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

function diferencaPesoMeta(req, res){
    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {

        res.status(400).send("O id do usuário está undefined!");

    } else {

        dashModel.diferencaPesoMeta(id_usuario)
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

function buscarDadosPerfil(req, res){
    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {

        res.status(400).send("O id do usuário está undefined!");

    } else {

        dashModel.buscarDadosPerfil(id_usuario)
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

function buscarPesoInicial(req,res){
    var id_usuario = req.params.id_usuario;

    dashModel.buscarPesoInicial(id_usuario)
    .then(function(resultado){

        res.json(resultado);
    })
    .catch(function (erro){
        console.log(erro);

        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMetaAtual(req,res){
    var id_usuario = req.params.id_usuario;

    dashModel.buscarMetaAtual(id_usuario)
    .then(function (resultado){
        
        res.json(resultado);
    })
    .catch(function (erro){
        console.log(erro);

        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarDadosGrafico,
    atualizarPeso,
    buscarTreinoDoDia,
    diferencaPesoMeta,
    buscarDadosPerfil,
    buscarPesoInicial,
    buscarMetaAtual
};