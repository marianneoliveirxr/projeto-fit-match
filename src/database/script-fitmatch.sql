create database fitMatch;
use fitMatch;

CREATE TABLE perfil(
	id INT PRIMARY KEY AUTO_INCREMENT,
    objetivo VARCHAR(45),
    nivelFisico VARCHAR(45),
    sexo VARCHAR(45),
    peso INT,
    altura INT,
    CONSTRAINT chk_objetivo CHECK (objetivo IN ('emagrecer', 'hipertrofia')),
    CONSTRAINT chk_nivelFisico CHECK (nivelFisico IN ('iniciante', 'intermediario', 'avancado')),
    CONSTRAINT chk_sexo CHECK (sexo IN ('feminino', 'masculino'))
);

create table usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80),
    email VARCHAR(50),
    senha VARCHAR(50),
    fkPerfil INT,
    FOREIGN KEY (fkPerfil) REFERENCES perfil(id)
);



CREATE TABLE imc(
	id INT PRIMARY KEY AUTO_INCREMENT,
    imc INT,
    dtRegistro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id_usuario)
);	

CREATE TABLE treino(
	id INT PRIMARY KEY AUTO_INCREMENT,
    divisao CHAR(1),
    cardio VARCHAR(60),
    fkPerfil INT,
    CONSTRAINT chk_divisao CHECK (divisao IN('A', 'B', 'C')),
    FOREIGN KEY (fkPerfil) REFERENCES perfil(id)
);

CREATE TABLE exercicios(
	id INT PRIMARY KEY AUTO_INCREMENT,
    exercicio VARCHAR(45),
    series INT,
	repeticoes INT,
    fkTreino INT,
    FOREIGN KEY (fkTreino) REFERENCES treino(id)
);

INSERT INTO perfil (objetivo, nivelFisico, sexo) VALUES
('emagrecer', 'iniciante', 'masculino'),
('emagrecer', 'intermediário', 'masculino'),
('emagrecer', 'avançado', 'masculino'),
('hipertrofia', 'iniciante', 'masculino'),
('hipertrofia', 'intermediário', 'masculino'),
('hipertrofia', 'avançado', 'masculino'),
('emagrecer', 'iniciante', 'feminino'),
('emagrecer', 'intermediário', 'feminino'),
('emagrecer', 'avançado', 'feminino'),
('hipertrofia', 'iniciante', 'feminino'),
('hipertrofia', 'intermediário', 'feminino'),
('hipertrofia', 'avançado', 'feminino');

SELECT * FROM usuario;
UPDATE usuario 
SET email = 'isabella@gmail.com'
WHERE id_usuario = 1;