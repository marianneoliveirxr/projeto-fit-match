var database = require("../database/config");

function buscarDadosGrafico(id_usuario) {
  var instrucaoSql = `
    SELECT 
    p.peso,
    ROUND(p.peso / POWER(p.altura / 100, 2), 1) AS imc,
    DATE_FORMAT(p.dtRegistro, '%d/%m') AS dtRegistro
    FROM progresso p
    WHERE p.fkUsuario = ${id_usuario}
    ORDER BY p.dtRegistro ASC;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);

  return database.executar(instrucaoSql);
}

function atualizarPeso(id_usuario, peso, altura){
  var instrucaoSql = `
                 INSERT INTO progresso (peso, altura, fkUsuario) VALUES (${peso}, ${altura}, ${id_usuario});
              `;
              console.log("Executando a instrução SQL: \n" + instrucaoSql);
              return database.executar(instrucaoSql);
}

function atualizarMeta(id_usuario, meta) {

    var instrucaoSql = `
        SELECT * FROM meta
        WHERE fkUsuario = ${id_usuario};
    `;

    return database.executar(instrucaoSql)
        .then(function(resultado) {

            if (resultado.length > 0) {

                var sqlUpdate = `
                    UPDATE meta
                    SET pesoMeta = ${meta}
                    WHERE fkUsuario = ${id_usuario};
                `;

                console.log("Atualizando meta:\n" + sqlUpdate);

                return database.executar(sqlUpdate);

            } else {

                var sqlInsert = `
                    INSERT INTO meta (pesoMeta, fkUsuario)
                    VALUES (${meta}, ${id_usuario});
                `;

                console.log("Inserindo meta:\n" + sqlInsert);

                return database.executar(sqlInsert);
            }
        });
}

module.exports = {
  buscarDadosGrafico,
  atualizarPeso,
  atualizarMeta
};
