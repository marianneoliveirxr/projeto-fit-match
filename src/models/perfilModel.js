var database = require("../database/config");

function adicionarPerfil(perfilId, id_usuario, peso, altura){
        var instrucaoSql = `
                UPDATE usuario SET fkPerfil = ${perfilId} WHERE id_usuario = ${id_usuario};
            `;
            console.log("Executando a instrução SQL: \n" + instrucaoSql);

            return database.executar(instrucaoSql), addProgresso(peso, altura);
}

function addProgresso(peso, altura){
    var instrucaoSql = `
               INSERT INTO progresso (peso, altura) VALUES (${peso}, ${altura});
            `;
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
}

module.exports = {
    adicionarPerfil,
    addProgresso
};

