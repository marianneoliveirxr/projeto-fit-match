var treinosModel = require("../models/treinosModel");

function buscarTreinos(req, res){
    var id_usuario = req.params.id_usuario;

    treinosModel.buscarTreinos(id_usuario)
    .then(function (resultado){

        res.json(resultado);
    })
    .catch(function(erro){

        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}