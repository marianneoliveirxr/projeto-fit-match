var database = require("../database/config");

function cadastrar(perfilId, peso, altura){
    console.log("ACESSEI O PERFIL MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
        var instrucaoSql = `
                INSERT INTO usuario (fkPerfil) VALUES ${perfilId};
                INSERT INTO perfil (peso, altura) VALUES ${peso}, ${altura};
            `;
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
}

