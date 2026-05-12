create database fitMatch;
use fitMatch;

create table usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80),
    email VARCHAR(50),
    senha VARCHAR(50)
);

CREATE TABLE perfil(
	id INT PRIMARY KEY AUTO_INCREMENT,
    objetivo VARCHAR(45),
    nivelFisico VARCHAR(45),
    sexo VARCHAR(45),
    fkUsuario INT,
    CONSTRAINT chk_objetivo CHECK (objetivo IN ('emagrecer', 'hipertrofia')),
    CONSTRAINT chk_nivelFisico CHECK (nivelFisico IN ('iniciante', 'intermediario', 'avancado')),
    CONSTRAINT chk_sexo CHECK (sexo IN ('feminino', 'masculino')),
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

CREATE TABLE imc(
	id INT PRIMARY KEY AUTO_INCREMENT,
    imc INT,
    dtRegistro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
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
('emagrecer', 'iniciante', 'feminino'),
('emagrecer', 'intermediário', 'feminino'),
('emagrecer', 'avançado', 'feminino'),
('hipertrofia', 'iniciante', 'masculino'),
('hipertrofia', 'intermediário', 'masculino'),
('hipertrofia', 'avançado', 'masculino'),
('hipertrofia', 'iniciante', 'feminino'),
('hipertrofia', 'intermediário', 'feminino'),
('hipertrofia', 'avançado', 'feminino');

desc treino;
INSERT INTO treino (divisao, cardio, fkPerfil) VALUES
('A', 'Escada ou Esteira', 1),
('B', 'Escada ou Esteira', 2),
('C', 'Escada ou Esteira', 3),
('A', 'Escada ou Esteira', 4),
('B', 'Escada ou Esteira', 5),
('C', 'Escada ou Esteira', 6),
('A', 'Esteira ou Bike', 7),
('B', 'Esteira ou Bike', 8),
('C', 'Esteira ou Bike', 9),
('A', 'Esteira ou Bike', 10),
('B', 'Esteira ou Bike', 11),
('C', 'Esteira ou Bike', 12);


INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com halteres', 4, 8, 7),
('Supino inclinado com halteres', 3, 10, 7),
('Crucifixo', 3, 10, 7),
('Desenvolvimento com halteres', 4, 10, 7),
('Elevação Lateral', 3, 12, 7),
('Tríceps Francês', 3, 10, 7),
('Tríceps Corda', 3, 10, 7);