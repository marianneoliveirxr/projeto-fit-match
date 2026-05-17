var database = require("../database/config");

function buscarDadosGrafico(id_usuario) {

    var instrucaoSql = `
        SELECT 
            p.peso,
            ROUND(p.peso / POWER(p.altura / 100, 2), 1) AS imc,
            p.dtRegistro
        FROM progresso p
        WHERE p.fkUsuario = ${id_usuario}
        ORDER BY p.dtRegistro ASC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosGrafico
};