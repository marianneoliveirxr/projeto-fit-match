var database = require("../database/config");

function buscarTreinos(id_usuario){
    var instrucaoSql = `
    SELECT *
    FROM vw_treinos_usuario
    WHERE id_usuario = 3
    ORDER BY divisao;`;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
  buscarTreinos
};