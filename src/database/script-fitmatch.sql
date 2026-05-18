create database fitMatch;
use fitMatch;


CREATE TABLE perfil(
	id INT PRIMARY KEY AUTO_INCREMENT,
    objetivo VARCHAR(45),
    nivelFisico VARCHAR(45),
    sexo VARCHAR(45),
    peso INT,
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

CREATE TABLE progresso(
	id INT PRIMARY KEY AUTO_INCREMENT,
    altura INT,
    dtRegistro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id_usuario)
);	

CREATE TABLE treino(
	id INT PRIMARY KEY AUTO_INCREMENT,
    divisao CHAR(1),
    musculos VARCHAR(60),
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

INSERT INTO treino (divisao, musculos, cardio, fkPerfil) VALUES
('A', 'Peito, Ombro e Triceps', 'Esteira', 1),
('B', 'Costas e Biceps', 'Esteira', 1),
('C', 'Pernas Completo', 'Esteira', 1),
('A', 'Peito, Ombro e Triceps', 'Bicicleta', 2),
('B', 'Costas e Biceps', 'Bicicleta', 2),
('C', 'Pernas Completo', 'Bicicleta', 2),
('A', 'Peito, Ombro e Triceps', 'Escada', 3),
('B', 'Costas e Biceps', 'Escada', 3),
('C', 'Pernas Completo', 'Escada', 3),
('A', 'Peito, Ombro e Triceps', 'Esteira', 4),
('B', 'Costas e Biceps', 'Esteira', 4),
('C', 'Pernas Completo', 'Esteira', 4),
('A', 'Peito, Ombro e Triceps', 'Bicicleta', 5),
('B', 'Costas e Biceps', 'Bicicleta', 5),
('C', 'Pernas Completo', 'Bicicleta', 5),
('A', 'Peito, Ombro e Triceps', 'Escada', 6),
('B', 'Costas e Biceps', 'Escada', 6),
('C', 'Pernas Completo', 'Escada', 6),
('A', 'Quadriceps', 'Esteira', 7),
('B', 'Superiores Completo', 'Esteira', 7),
('C', 'Gluteo e Posterior', 'Esteira', 7),
('A', 'Quadriceps', 'Esteira inclinada', 8),
('B', 'Superiores Completo', 'Esteira inclinada', 8),
('C', 'Gluteo e Posterior', 'Esteira inclinada', 8),
('A', 'Quadriceps', 'Bicicleta', 9),
('B', 'Superiores Completo', 'Bicicleta', 9),
('C', 'Gluteo e Posterior', 'Bicicleta', 9),
('A', 'Quadriceps', 'Esteira', 10),
('B', 'Superiores Completo', 'Esteira', 10),
('C', 'Gluteo e Posterior', 'Esteira', 10),
('A', 'Quadriceps', 'Escada', 11),
('B', 'Superiores Completo', 'Escada', 11),
('C', 'Gluteo e Posterior', 'Escada', 11),
('A', 'Quadriceps', 'Esteira', 12),
('B', 'Superiores Completo', 'Esteira', 12),
('C', 'Gluteo e Posterior', 'Esteira', 12);

-- PERFIL 1 - HOMEM EMAGRECER INICIANTE
-- TREINO A 
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 3, 15, 1),
('Supino inclinado com halteres', 3, 15, 1),
('Desenvolvimento com halteres', 3, 15, 1),
('Crucifixo reto com halteres', 3, 15, 1),
('Triceps testa com barra', 3, 15, 1),
('Triceps pushdown na polia alta', 3, 15, 1);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Puxada na frente com barra na polia alta', 3, 15, 2),
('Remada curvada com barra', 3, 15, 2),
('Remada unilateral com halteres', 3, 15, 2),
('Remada baixa na maquina', 3, 15, 2),
('Rosca direta com barra', 3, 15, 2),
('Rosca alternada com halteres', 3, 15, 2);

-- TREINO C
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 3, 15, 3),
('Leg press 45', 3, 15, 3),
('Avanco com halteres', 3, 15, 3),
('Leg extension', 3, 15, 3),
('Cadeira flexora', 3, 15, 3),
('Peso morto romeno', 3, 15, 3);

-- PERFIL 2 - HOMEM EMAGRECER INTERMEDIARIO
-- TREINO A 
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 4, 12, 4),
('Supino inclinado com halteres', 4, 12, 4),
('Desenvolvimento com halteres', 4, 12, 4),
('Crucifixo inclinado com halteres', 4, 12, 4),
('Triceps testa com barra', 4, 12, 4),
('Triceps pushdown na polia alta', 4, 12, 4);

-- TREINO B 
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Puxada alta na polia', 4, 12, 5),
('Remada curvada com barra', 4, 12, 5),
('Remada unilateral com halteres', 4, 12, 5),
('Remada baixa na maquina', 4, 12, 5),
('Rosca direta com barra', 4, 12, 5),
('Rosca alternada com halteres', 4, 12, 5);

-- TREINO C 
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 4, 12, 6),
('Leg press 45', 4, 12, 6),
('Avanco com halteres', 4, 12, 6),
('Leg extension', 4, 12, 6),
('Cadeira flexora', 4, 12, 6),
('Stiff deadlift com barra', 4, 12, 6);


-- PERFIL 3 - HOMEM EMAGRECER AVANCADO
-- TREINO A 
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 4, 10, 7),
('Supino inclinado com halteres', 4, 10, 7),
('Desenvolvimento com halteres', 4, 10, 7),
('Crucifixo com halteres', 4, 10, 7),
('Triceps testa com barra', 4, 10, 7),
('Triceps pushdown na polia alta', 4, 10, 7);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Puxada na frente com barra', 4, 10, 8),
('Remada curvada com barra', 4, 10, 8),
('Remada unilateral com halteres', 4, 10, 8),
('Remada baixa com polia', 4, 10, 8),
('Rosca direta com barra', 4, 10, 8),
('Rosca alternada com halteres', 4, 10, 8);

-- TREINO C
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 4, 10, 9),
('Leg press 45', 4, 10, 9),
('Avanco com halteres', 4, 10, 9),
('Hack squat', 4, 10, 9),
('Leg extension', 4, 10, 9),
('Cadeira flexora', 4, 10, 9);


-- PERFIL 4 - HOMEM HIPERTROFIA INICIANTE
-- TREINO A
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 3, 12, 10),
('Supino inclinado com halteres', 3, 12, 10),
('Desenvolvimento com halteres', 3, 12, 10),
('Crucifixo reto com halteres', 3, 12, 10),
('Triceps testa com barra', 3, 12, 10),
('Triceps pushdown na polia alta', 3, 12, 10);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Puxada na polia alta', 3, 12, 11),
('Remada curvada com barra', 3, 12, 11),
('Remada unilateral com halteres', 3, 12, 11),
('Remada baixa na maquina', 3, 12, 11),
('Rosca direta com barra', 3, 12, 11),
('Rosca alternada com halteres', 3, 12, 11);

-- TREINO C
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 3, 12, 12),
('Leg press 45', 3, 12, 12),
('Avanco com halteres', 3, 12, 12),
('Leg extension', 3, 12, 12),
('Cadeira flexora', 3, 12, 12),
('Peso morto romeno', 3, 12, 12);


-- PERFIL 5 - HOMEM HIPERTROFIA INTERMEDIARIO
-- TREINO A
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 4, 10, 13),
('Supino inclinado com halteres', 4, 10, 13),
('Desenvolvimento com halteres', 4, 10, 13),
('Fly com halteres', 4, 10, 13),
('Triceps testa com barra', 4, 10, 13),
('Triceps pushdown na polia alta', 4, 10, 13);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Puxada alta na polia', 4, 10, 14),
('Remada curvada com barra', 4, 10, 14),
('Remada unilateral com halteres', 4, 10, 14),
('Remada baixa com polia', 4, 10, 14),
('Rosca direta com barra', 4, 10, 14),
('Rosca alternada com halteres', 4, 10, 14);

-- TREINO C
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 4, 10, 15),
('Leg press 45', 4, 10, 15),
('Avanco com halteres', 4, 10, 15),
('Hack squat', 4, 10, 15),
('Leg extension', 4, 10, 15),
('Cadeira flexora', 4, 10, 15);

-- PERFIL 6 - HOMEM HIPERTROFIA AVANCADO
-- TREINO A 
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 4, 8, 16),
('Supino inclinado com halteres', 4, 8, 16),
('Desenvolvimento com halteres', 4, 8, 16),
('Crucifixo com halteres', 4, 8, 16),
('Triceps testa com barra', 4, 8, 16),
('Triceps pushdown na polia alta', 4, 8, 16);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Puxada alta na polia', 4, 8, 17),
('Remada curvada com barra', 4, 8, 17),
('Remada unilateral com halteres', 4, 8, 17),
('Remada baixa com polia', 4, 8, 17),
('Rosca direta com barra', 4, 8, 17),
('Rosca alternada com halteres', 4, 8, 17);

-- TREINO C
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 4, 8, 18),
('Leg press 45', 4, 8, 18),
('Avanco com halteres', 4, 8, 18),
('Hack squat', 4, 8, 18),
('Leg extension', 4, 8, 18),
('Cadeira flexora', 4, 8, 18);

-- PERFIL 7 - MULHER EMAGRECER INICIANTE
-- TREINO A
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 3, 15, 19),
('Leg press 45', 3, 15, 19),
('Agachamento com halteres', 3, 15, 19),
('Avanco com halteres', 3, 15, 19),
('Hack squat', 3, 15, 19),
('Leg extension', 3, 15, 19);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 3, 15, 20),
('Puxada na polia alta', 3, 15, 20),
('Remada unilateral com halteres', 3, 15, 20),
('Desenvolvimento com halteres', 3, 15, 20),
('Rosca direta com barra', 3, 15, 20),
('Triceps na polia alta', 3, 15, 20);

-- TREINO C (fkTreino = 21)
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Hip thrust com barra', 3, 15, 21),
('Levantamento terra romeno', 3, 15, 21),
('Avanco com halteres', 3, 15, 21),
('Glute bridge', 3, 15, 21),
('Cadeira abdutora', 3, 15, 21),
('Cadeira flexora', 3, 15, 21);

-- PERFIL 8 - MULHER EMAGRECER INTERMEDIARIO
-- TREINO A
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 4, 12, 22),
('Leg press 45', 4, 12, 22),
('Agachamento com halteres', 4, 12, 22),
('Avanco com halteres', 4, 12, 22),
('Hack squat', 4, 12, 22),
('Leg extension', 4, 12, 22);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 4, 12, 23),
('Puxada na polia alta', 4, 12, 23),
('Remada unilateral com halteres', 4, 12, 23),
('Desenvolvimento com halteres', 4, 12, 23),
('Rosca direta com barra', 4, 12, 23),
('Triceps na polia alta', 4, 12, 23);

-- TREINO C
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Hip thrust com barra', 4, 12, 24),
('Peso morto romeno', 4, 12, 24),
('Avanco com halteres', 4, 12, 24),
('Glute bridge com caneleiras', 4, 12, 24),
('Abducao de quadril na maquina', 4, 12, 24),
('Cadeira flexora', 4, 12, 24);

-- PERFIL 9 - MULHER EMAGRECER AVANCADO
-- TREINO A
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 4, 10, 25),
('Leg press 45', 4, 10, 25),
('Hack squat', 4, 10, 25),
('Agachamento sumo com barra', 4, 10, 25),
('Leg extension', 4, 10, 25),
('Avanco com halteres', 4, 10, 25);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 4, 10, 26),
('Remada curvada com barra', 4, 10, 26),
('Puxada na polia alta', 4, 10, 26),
('Desenvolvimento com halteres', 4, 10, 26),
('Rosca direta com barra', 4, 10, 26),
('Triceps pushdown na polia alta', 4, 10, 26);

-- TREINO C
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Hip thrust com barra', 4, 10, 27),
('Peso morto romeno', 4, 10, 27),
('Avanco com halteres', 4, 10, 27),
('Glute bridge', 4, 10, 27),
('Cadeira abdutora', 4, 10, 27),
('Leg curl', 4, 10, 27);


-- PERFIL 10 - MULHER HIPERTROFIA INICIANTE
-- TREINO A
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 3, 12, 28),
('Leg press 45', 3, 12, 28),
('Agachamento com halteres', 3, 12, 28),
('Avanco com halteres', 3, 12, 28),
('Hack squat', 3, 12, 28),
('Leg extension', 3, 12, 28);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 3, 12, 29),
('Remada unilateral com halteres', 3, 12, 29),
('Puxada na polia alta', 3, 12, 29),
('Desenvolvimento com halteres', 3, 12, 29),
('Rosca direta com barra', 3, 12, 29),
('Triceps na polia alta', 3, 12, 29);

-- TREINO C
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Hip thrust com barra', 3, 12, 30),
('Peso morto romeno', 3, 12, 30),
('Avanco com halteres', 3, 12, 30),
('Glute bridge', 3, 12, 30),
('Cadeira abdutora', 3, 12, 30),
('Cadeira flexora', 3, 12, 30);

-- PERFIL 11 - MULHER HIPERTROFIA INTERMEDIARIO
-- TREINO A
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 4, 10, 31),
('Leg press 45', 4, 10, 31),
('Hack squat', 4, 10, 31),
('Agachamento com halteres', 4, 10, 31),
('Leg extension', 4, 10, 31),
('Avanco com halteres', 4, 10, 31);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 4, 10, 32),
('Puxada na polia alta', 4, 10, 32),
('Remada unilateral com halteres', 4, 10, 32),
('Desenvolvimento com halteres', 4, 10, 32),
('Rosca direta com barra', 4, 10, 32),
('Triceps na polia alta', 4, 10, 32);

-- TREINO C
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Hip thrust com barra', 4, 10, 33),
('Peso morto romeno', 4, 10, 33),
('Avanco com halteres', 4, 10, 33),
('Glute bridge com peso', 4, 10, 33),
('Cadeira abdutora', 4, 10, 33),
('Leg curl', 4, 10, 33);


-- PERFIL 12 - MULHER HIPERTROFIA AVANCADO
-- TREINO A
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Agachamento com barra', 5, 10, 34),
('Leg press 45', 5, 10, 34),
('Hack squat', 5, 10, 34),
('Agachamento sumo com barra', 5, 10, 34),
('Leg extension', 5, 10, 34),
('Avanco com halteres', 5, 10, 34);

-- TREINO B
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Supino reto com barra', 5, 10, 35),
('Remada curvada com barra', 5, 10, 35),
('Puxada na polia alta', 5, 10, 35),
('Desenvolvimento com halteres', 5, 10, 35),
('Rosca direta com barra', 5, 10, 35),
('Triceps pushdown na polia alta', 5, 10, 35);

-- TREINO C
INSERT INTO exercicios (exercicio, series, repeticoes, fkTreino) VALUES
('Hip thrust com barra', 5, 10, 36),
('Peso morto romeno', 5, 10, 36),
('Avanco com halteres', 5, 10, 36),
('Glute bridge com barra', 5, 10, 36),
('Cadeira abdutora', 5, 10, 36),
('Leg curl', 5, 10, 36);