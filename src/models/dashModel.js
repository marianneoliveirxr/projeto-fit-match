var database = require("../database/config");

function buscarDadosGrafico(id_usuario) {
  var instrucaoSql = `
    SELECT 
    peso,
    ROUND(peso / POWER(altura / 100, 2), 1) AS imc,
    DATE_FORMAT(dtRegistro, '%d/%m') AS dtRegistro
    FROM VW_dashboard
    WHERE fkUsuario = ${id_usuario}
    ORDER BY dtRegistro ASC;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);

  return database.executar(instrucaoSql);
}

function atualizarPeso(id_usuario, peso, altura) {
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

  return database.executar(instrucaoSql).then(function (resultado) {
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

function buscarTreinoDoDia(id_usuario) {
  var instrucaoSql = `
    SELECT t.musculos
    FROM usuario u
    JOIN perfil p ON p.id = u.fkPerfil
    JOIN treino t ON t.fkPerfil = p.id
    WHERE u.id_usuario = ${id_usuario}
    AND divisao =
    CASE (DAYOFMONTH(CURDATE()) % 3)
    WHEN 1 THEN 'A'
    WHEN 2 THEN 'B'
    ELSE 'C'
    END;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);

  return database.executar(instrucaoSql);
}


module.exports = {
  buscarDadosGrafico,
  atualizarPeso,
  atualizarMeta,
  buscarTreinoDoDia
};
