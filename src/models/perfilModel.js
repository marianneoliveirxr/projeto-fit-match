var database = require("../database/config");

function adicionarPerfil(perfilId, id_usuario, peso, altura){
        var instrucaoSql = `
                UPDATE usuario SET fkPerfil = ${perfilId} WHERE id_usuario = ${id_usuario};
            `;
            console.log("Executando a instrução SQL: \n" + instrucaoSql);

            return database.executar(instrucaoSql).then(() => addProgresso(peso, altura, id_usuario));
}

function addProgresso(peso, altura, id_usuario){
    var instrucaoSql = `
               INSERT INTO progresso (peso, altura, fkUsuario) VALUES (${peso}, ${altura}, ${id_usuario});
            `;
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
}

module.exports = {
    adicionarPerfil,
    addProgresso
};

