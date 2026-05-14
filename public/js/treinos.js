const treinos = [
  {
    fkPerfil: 1,
    perfil: "Homem Iniciante — Emagrecimento",
    divisao: "A",
    musculos: "Peito, Ombro e Tríceps",
    exercicios: [
      { nome: "Supino reto com barra", serie: 3, repeticoes: "12-15" },
      { nome: "Supino inclinado com halteres", serie: 3, repeticoes: "12-15" },
      { nome: "Desenvolvimento com halteres", serie: 3, repeticoes: "12-15" },
      { nome: "Crucifixo reto com halteres", serie: 3, repeticoes: "12-15" },
      { nome: "Tríceps testa com barra", serie: 3, repeticoes: "12-15" },
      { nome: "Tríceps pushdown na polia alta", serie: 3, repeticoes: "12-15" }
    ],
    cardio: "Esteira",
    tempo: "30 minutos"
  },

  {
    fkPerfil: 1,
    perfil: "Homem Iniciante — Emagrecimento",
    divisao: "B",
    musculos: "Costas e Bíceps",
    exercicios: [
      { nome: "Puxada na frente com barra na polia alta", serie: 3, repeticoes: "12-15" },
      { nome: "Remada curvada com barra", serie: 3, repeticoes: "12-15" },
      { nome: "Remada unilateral com halteres", serie: 3, repeticoes: "12-15" },
      { nome: "Remada baixa na máquina/polia", serie: 3, repeticoes: "12-15" },
      { nome: "Rosca direta com barra", serie: 3, repeticoes: "12-15" },
      { nome: "Rosca alternada com halteres", serie: 3, repeticoes: "12-15" }
    ],
    cardio: "Esteira",
    tempo: "30 minutos"
  },

  {
    fkPerfil: 1,
    perfil: "Homem Iniciante — Emagrecimento",
    divisao: "C",
    musculos: "Pernas Completo",
    exercicios: [
      { nome: "Agachamento com barra", serie: 3, repeticoes: "12-15" },
      { nome: "Leg press 45°", serie: 3, repeticoes: "12-15" },
      { nome: "Avanço com halteres", serie: 3, repeticoes: "12-15" },
      { nome: "Leg extension", serie: 3, repeticoes: "12-15" },
      { nome: "Cadeira flexora", serie: 3, repeticoes: "12-15" },
      { nome: "Peso morto romeno", serie: 3, repeticoes: "12-15" }
    ],
    cardio: "Esteira",
    tempo: "30 minutos"
  },

  {
    fkPerfil: 2,
    perfil: "Homem Intermediário — Emagrecimento",
    divisao: "A",
    musculos: "Peito, Ombro e Tríceps",
    exercicios: [
      { nome: "Supino reto com barra", serie: 4, repeticoes: "10-12" },
      { nome: "Supino inclinado com halteres", serie: 4, repeticoes: "10-12" },
      { nome: "Desenvolvimento com halteres", serie: 4, repeticoes: "10-12" },
      { nome: "Crucifixo inclinado com halteres", serie: 4, repeticoes: "10-12" },
      { nome: "Tríceps testa com barra", serie: 4, repeticoes: "10-12" },
      { nome: "Tríceps pushdown na polia alta", serie: 4, repeticoes: "10-12" }
    ],
    cardio: "Bicicleta",
    tempo: "35 minutos"
  },

  {
    fkPerfil: 2,
    perfil: "Homem Intermediário — Emagrecimento",
    divisao: "B",
    musculos: "Costas e Bíceps",
    exercicios: [
      { nome: "Puxada alta na polia", serie: 4, repeticoes: "10-12" },
      { nome: "Remada curvada com barra", serie: 4, repeticoes: "10-12" },
      { nome: "Remada unilateral com halteres", serie: 4, repeticoes: "10-12" },
      { nome: "Remada baixa na máquina/polia", serie: 4, repeticoes: "10-12" },
      { nome: "Rosca direta com barra", serie: 4, repeticoes: "10-12" },
      { nome: "Rosca alternada com halteres", serie: 4, repeticoes: "10-12" }
    ],
    cardio: "Bicicleta",
    tempo: "35 minutos"
  },

  {
    fkPerfil: 2,
    perfil: "Homem Intermediário — Emagrecimento",
    divisao: "C",
    musculos: "Pernas Completo",
    exercicios: [
      { nome: "Agachamento com barra", serie: 4, repeticoes: "10-12" },
      { nome: "Leg press 45°", serie: 4, repeticoes: "10-12" },
      { nome: "Avanço com halteres", serie: 4, repeticoes: "10-12" },
      { nome: "Leg extension", serie: 4, repeticoes: "10-12" },
      { nome: "Cadeira flexora", serie: 4, repeticoes: "10-12" },
      { nome: "Stiff deadlift com barra", serie: 4, repeticoes: "10-12" }
    ],
    cardio: "Bicicleta",
    tempo: "35 minutos"
  },
  {
    fkPerfil: 3,
  perfil: "Homem Avançado — Emagrecimento",
  divisao: "A",
  musculos: "Peito, Ombro e Tríceps",
  exercicios: [
    { nome: "Supino reto com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Supino inclinado com halteres", serie: 4, repeticoes: "8-12" },
    { nome: "Desenvolvimento com halteres", serie: 4, repeticoes: "8-12" },
    { nome: "Crucifixo com halteres", serie: 4, repeticoes: "8-12" },
    { nome: "Tríceps testa com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Tríceps pushdown na polia alta", serie: 4, repeticoes: "8-12" }
  ],
  cardio: "Escada",
  tempo: "40 minutos"
},

{
  fkPerfil: 3,
  perfil: "Homem Avançado — Emagrecimento",
  divisao: "B",
  musculos: "Costas e Bíceps",
  exercicios: [
    { nome: "Puxada na frente com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Remada curvada com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Remada unilateral com halteres", serie: 4, repeticoes: "8-12" },
    { nome: "Remada baixa com polia", serie: 4, repeticoes: "8-12" },
    { nome: "Rosca direta com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Rosca alternada com halteres", serie: 4, repeticoes: "8-12" }
  ],
  cardio: "Escada",
  tempo: "40 minutos"
},

{
  fkPerfil: 3,
  perfil: "Homem Avançado — Emagrecimento",
  divisao: "C",
  musculos: "Pernas Completo",
  exercicios: [
    { nome: "Agachamento com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Leg press 45°", serie: 4, repeticoes: "8-12" },
    { nome: "Avanço com halteres", serie: 4, repeticoes: "8-12" },
    { nome: "Hack squat", serie: 4, repeticoes: "8-12" },
    { nome: "Leg extension", serie: 4, repeticoes: "8-12" },
    { nome: "Cadeira flexora", serie: 4, repeticoes: "8-12" }
  ],
  cardio: "Escada",
  tempo: "40 minutos"
},

{
  fkPerfil: 3,
    perfil: "Homem Iniciante — Hipertrofia",
    divisao: "A",
    musculos: "Peito, Ombro e Tríceps",
    exercicios: [
      { nome: "Supino reto com barra", serie: 3, repeticoes: "8-12" },
      { nome: "Supino inclinado com halteres", serie: 3, repeticoes: "8-12" },
      { nome: "Desenvolvimento com halteres", serie: 3, repeticoes: "8-12" },
      { nome: "Crucifixo reto com halteres", serie: 3, repeticoes: "8-12" },
      { nome: "Tríceps testa com barra", serie: 3, repeticoes: "8-12" },
      { nome: "Tríceps pushdown na polia alta", serie: 3, repeticoes: "8-12" }
    ],
    cardio: "Esteira",
    tempo: "20 minutos"
  },

  {
    fkPerfil: 4,
    perfil: "Homem Iniciante — Hipertrofia",
    divisao: "B",
    musculos: "Costas e Bíceps",
    exercicios: [
      { nome: "Puxada na polia alta", serie: 3, repeticoes: "8-12" },
      { nome: "Remada curvada com barra", serie: 3, repeticoes: "8-12" },
      { nome: "Remada unilateral com halteres", serie: 3, repeticoes: "8-12" },
      { nome: "Remada baixa na máquina/polia", serie: 3, repeticoes: "8-12" },
      { nome: "Rosca direta com barra", serie: 3, repeticoes: "8-12" },
      { nome: "Rosca alternada com halteres", serie: 3, repeticoes: "8-12" }
    ],
    cardio: "Esteira",
    tempo: "20 minutos"
  },

  {
    fkPerfil: 4,
    perfil: "Homem Iniciante — Hipertrofia",
    divisao: "C",
    musculos: "Pernas Completo",
    exercicios: [
      { nome: "Agachamento com barra", serie: 3, repeticoes: "8-12" },
      { nome: "Leg press 45°", serie: 3, repeticoes: "8-12" },
      { nome: "Avanço com halteres", serie: 3, repeticoes: "8-12" },
      { nome: "Leg extension", serie: 3, repeticoes: "8-12" },
      { nome: "Cadeira flexora", serie: 3, repeticoes: "8-12" },
      { nome: "Peso morto romeno", serie: 3, repeticoes: "8-12" }
    ],
    cardio: "Esteira",
    tempo: "20 minutos"
  },

  {
    fkPerfil: 5,
  perfil: "Homem Intermediário — Hipertrofia",
  divisao: "A",
  musculos: "Peito, Ombro e Tríceps",
  exercicios: [
    { nome: "Supino reto com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Supino inclinado com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Desenvolvimento com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Fly/Crucifixo com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Tríceps testa com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Tríceps pushdown na polia alta", serie: 4, repeticoes: "6-12" }
  ],
  cardio: "Bicicleta",
  tempo: "25 minutos"
},

{
  fkPerfil: 5,
  perfil: "Homem Intermediário — Hipertrofia",
  divisao: "B",
  musculos: "Costas e Bíceps",
  exercicios: [
    { nome: "Puxada alta na polia", serie: 4, repeticoes: "6-12" },
    { nome: "Remada curvada com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Remada unilateral com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Remada baixa com polia", serie: 4, repeticoes: "6-12" },
    { nome: "Rosca direta com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Rosca alternada com halteres", serie: 4, repeticoes: "6-12" }
  ],
  cardio: "Bicicleta",
  tempo: "25 minutos"
},

{
  fkPerfil: 5,
  perfil: "Homem Intermediário — Hipertrofia",
  divisao: "C",
  musculos: "Pernas Completo",
  exercicios: [
    { nome: "Agachamento com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Leg press 45°", serie: 4, repeticoes: "6-12" },
    { nome: "Avanço com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Hack squat", serie: 4, repeticoes: "6-12" },
    { nome: "Leg extension", serie: 4, repeticoes: "6-12" },
    { nome: "Cadeira flexora", serie: 4, repeticoes: "6-12" }
  ],
  cardio: "Bicicleta",
  tempo: "25 minutos"
},

// =========================================
// HOMEM - HIPERTROFIA - AVANÇADO
// =========================================
{
  fkPerfil: 6,
  perfil: "Homem Avançado — Hipertrofia",
  divisao: "A",
  musculos: "Peito, Ombro e Tríceps",
  exercicios: [
    { nome: "Supino reto com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Supino inclinado com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Desenvolvimento com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Crucifixo com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Tríceps testa com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Tríceps pushdown na polia alta", serie: 4, repeticoes: "6-12" }
  ],
  cardio: "Escada",
  tempo: "20 minutos"
},

{
  fkPerfil: 6,
  perfil: "Homem Avançado — Hipertrofia",
  divisao: "B",
  musculos: "Costas e Bíceps",
  exercicios: [
    { nome: "Puxada alta na polia", serie: 4, repeticoes: "6-12" },
    { nome: "Remada curvada com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Remada unilateral com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Remada baixa com polia", serie: 4, repeticoes: "6-12" },
    { nome: "Rosca direta com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Rosca alternada com halteres", serie: 4, repeticoes: "6-12" }
  ],
  cardio: "Escada",
  tempo: "20 minutos"
},

{
  fkPerfil: 6,
  perfil: "Homem Avançado — Hipertrofia",
  divisao: "C",
  musculos: "Pernas Completo",
  exercicios: [
    { nome: "Agachamento com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Leg press 45°", serie: 4, repeticoes: "6-12" },
    { nome: "Avanço com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Hack squat", serie: 4, repeticoes: "6-12" },
    { nome: "Leg extension", serie: 4, repeticoes: "6-12" },
    { nome: "Cadeira flexora", serie: 4, repeticoes: "6-12" }
  ],
  cardio: "Escada",
  tempo: "20 minutos"
},

 {
  fkPerfil: 7,
    perfil: "Mulher Iniciante — Emagrecimento",
    divisao: "A",
    musculos: "Quadríceps",
    exercicios: [
      { nome: "Agachamento com barra", serie: 3, repeticoes: "12-15" },
      { nome: "Leg press 45°", serie: 3, repeticoes: "12-15" },
      { nome: "Agachamento com halteres", serie: 3, repeticoes: "12-15" },
      { nome: "Avanço com halteres", serie: 3, repeticoes: "12-15" },
      { nome: "Hack squat", serie: 3, repeticoes: "12-15" },
      { nome: "Leg extension", serie: 3, repeticoes: "12-15" }
    ],
    cardio: "Esteira",
    tempo: "35 minutos"
  },

  {
    fkPerfil: 7,
    perfil: "Mulher Iniciante — Emagrecimento",
    divisao: "B",
    musculos: "Superiores Completo",
    exercicios: [
      { nome: "Supino reto com barra", serie: 3, repeticoes: "12-15" },
      { nome: "Puxada na polia alta", serie: 3, repeticoes: "12-15" },
      { nome: "Remada unilateral com halteres", serie: 3, repeticoes: "12-15" },
      { nome: "Desenvolvimento com halteres", serie: 3, repeticoes: "12-15" },
      { nome: "Rosca direta com barra", serie: 3, repeticoes: "12-15" },
      { nome: "Tríceps na polia alta", serie: 3, repeticoes: "12-15" }
    ],
    cardio: "Esteira",
    tempo: "35 minutos"
  },

  {
    fkPerfil: 7,
    perfil: "Mulher Iniciante — Emagrecimento",
    divisao: "C",
    musculos: "Glúteo e Posterior",
    exercicios: [
      { nome: "Hip thrust com barra", serie: 3, repeticoes: "12-15" },
      { nome: "Levantamento terra romeno", serie: 3, repeticoes: "12-15" },
      { nome: "Avanço com halteres", serie: 3, repeticoes: "12-15" },
      { nome: "Glute bridge", serie: 3, repeticoes: "12-15" },
      { nome: "Cadeira abdutora", serie: 3, repeticoes: "12-15" },
      { nome: "Cadeira flexora", serie: 3, repeticoes: "12-15" }
    ],
    cardio: "Esteira",
    tempo: "35 minutos"
  },
{
  fkPerfil: 8,
  perfil: "Mulher Intermediário — Emagrecimento",
  divisao: "A",
  musculos: "Quadríceps",
  exercicios: [
    { nome: "Agachamento com barra", serie: 4, repeticoes: "10-12" },
    { nome: "Leg press 45°", serie: 4, repeticoes: "10-12" },
    { nome: "Agachamento com halteres", serie: 4, repeticoes: "10-12" },
    { nome: "Avanço com halteres", serie: 4, repeticoes: "10-12" },
    { nome: "Hack squat", serie: 4, repeticoes: "10-12" },
    { nome: "Leg extension", serie: 4, repeticoes: "10-12" }
  ],
  cardio: "Esteira inclinada",
  tempo: "35 minutos"
},

{
  fkPerfil: 8,
  perfil: "Mulher Intermediário — Emagrecimento",
  divisao: "B",
  musculos: "Superiores completo",
  exercicios: [
    { nome: "Supino reto com barra", serie: 4, repeticoes: "10-12" },
    { nome: "Puxada na polia alta", serie: 4, repeticoes: "10-12" },
    { nome: "Remada unilateral com halteres", serie: 4, repeticoes: "10-12" },
    { nome: "Desenvolvimento com halteres", serie: 4, repeticoes: "10-12" },
    { nome: "Rosca direta com barra", serie: 4, repeticoes: "10-12" },
    { nome: "Tríceps na polia alta", serie: 4, repeticoes: "10-12" }
  ],
  cardio: "Esteira inclinada",
  tempo: "35 minutos"
},

{
  fkPerfil: 8,
  perfil: "Mulher Intermediário — Emagrecimento",
  divisao: "C",
  musculos: "Glúteo e posterior",
  exercicios: [
    { nome: "Hip thrust com barra", serie: 4, repeticoes: "10-12" },
    { nome: "Peso morto romeno", serie: 4, repeticoes: "10-12" },
    { nome: "Avanço com halteres", serie: 4, repeticoes: "10-12" },
    { nome: "Glute bridge com caneleiras", serie: 4, repeticoes: "10-12" },
    { nome: "Abdução de quadril na máquina", serie: 4, repeticoes: "10-12" },
    { nome: "Cadeira flexora", serie: 4, repeticoes: "10-12" }
  ],
  cardio: "Esteira inclinada",
  tempo: "35 minutos"
},

{
  fkPerfil: 9,
  perfil: "Mulher Avançado — Emagrecimento",
  divisao: "A",
  musculos: "Quadríceps",
  exercicios: [
    { nome: "Agachamento com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Leg press 45°", serie: 4, repeticoes: "8-12" },
    { nome: "Hack squat", serie: 4, repeticoes: "8-12" },
    { nome: "Agachamento sumô com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Leg extension", serie: 4, repeticoes: "8-12" },
    { nome: "Avanço com halteres", serie: 4, repeticoes: "8-12" }
  ],
  cardio: "Bicicleta",
  tempo: "30 minutos"
},

{
  fkPerfil: 9,
  perfil: "Mulher Avançado — Emagrecimento",
  divisao: "B",
  musculos: "Superiores completo",
  exercicios: [
    { nome: "Supino reto com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Remada curvada com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Puxada na polia alta", serie: 4, repeticoes: "8-12" },
    { nome: "Desenvolvimento com halteres", serie: 4, repeticoes: "8-12" },
    { nome: "Rosca direta com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Tríceps pushdown na polia alta", serie: 4, repeticoes: "8-12" }
  ],
  cardio: "Bicicleta",
  tempo: "30 minutos"
},

{
  fkPerfil: 9,
  perfil: "Mulher Avançado — Emagrecimento",
  divisao: "C",
  musculos: "Glúteo e posterior",
  exercicios: [
    { nome: "Hip thrust com barra", serie: 4, repeticoes: "8-12" },
    { nome: "Peso morto romeno", serie: 4, repeticoes: "8-12" },
    { nome: "Avanço com halteres", serie: 4, repeticoes: "8-12" },
    { nome: "Glute bridge", serie: 4, repeticoes: "8-12" },
    { nome: "Cadeira abdutora", serie: 4, repeticoes: "8-12" },
    { nome: "Leg curl", serie: 4, repeticoes: "8-12" }
  ],
  cardio: "Bicicleta",
  tempo: "30 minutos"
},

{
  fkPerfil: 10,
  perfil: "Mulher Iniciante — Hipertrofia",
  divisao: "A",
  musculos: "Quadríceps",
  exercicios: [
    { nome: "Agachamento com barra", serie: 3, repeticoes: "8-12" },
    { nome: "Leg press 45°", serie: 3, repeticoes: "8-12" },
    { nome: "Agachamento com halteres", serie: 3, repeticoes: "8-12" },
    { nome: "Avanço com halteres", serie: 3, repeticoes: "8-12" },
    { nome: "Hack squat", serie: 3, repeticoes: "8-12" },
    { nome: "Leg extension", serie: 3, repeticoes: "8-12" }
  ],
  cardio: "Esteira",
  tempo: "25 minutos"
},

{
  fkPerfil: 10,
  perfil: "Mulher Iniciante — Hipertrofia",
  divisao: "B",
  musculos: "Superiores completo",
  exercicios: [
    { nome: "Supino reto com barra", serie: 3, repeticoes: "8-12" },
    { nome: "Remada unilateral com halteres", serie: 3, repeticoes: "8-12" },
    { nome: "Puxada na polia alta", serie: 3, repeticoes: "8-12" },
    { nome: "Desenvolvimento com halteres", serie: 3, repeticoes: "8-12" },
    { nome: "Rosca direta com barra", serie: 3, repeticoes: "8-12" },
    { nome: "Tríceps na polia alta", serie: 3, repeticoes: "8-12" }
  ],
  cardio: "Esteira",
  tempo: "25 minutos"
},

{
  fkPerfil: 10,
  perfil: "Mulher Iniciante — Hipertrofia",
  divisao: "C",
  musculos: "Glúteo e posterior",
  exercicios: [
    { nome: "Hip thrust com barra", serie: 3, repeticoes: "8-12" },
    { nome: "Peso morto romeno", serie: 3, repeticoes: "8-12" },
    { nome: "Avanço com halteres", serie: 3, repeticoes: "8-12" },
    { nome: "Glute bridge", serie: 3, repeticoes: "8-12" },
    { nome: "Cadeira abdutora", serie: 3, repeticoes: "8-12" },
    { nome: "Cadeira flexora", serie: 3, repeticoes: "8-12" }
  ],
  cardio: "Esteira",
  tempo: "25 minutos"
},

{
  fkPerfil: 11,
  perfil: "Mulher Intermediário — Hipertrofia",
  divisao: "A",
  musculos: "Quadríceps",
  exercicios: [
    { nome: "Agachamento com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Leg press 45°", serie: 4, repeticoes: "6-12" },
    { nome: "Hack squat", serie: 4, repeticoes: "6-12" },
    { nome: "Agachamento com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Leg extension", serie: 4, repeticoes: "6-12" },
    { nome: "Avanço com halteres", serie: 4, repeticoes: "6-12" }
  ],
  cardio: "Escada",
  tempo: "25 minutos"
},

{
  fkPerfil: 11,
  perfil: "Mulher Intermediário — Hipertrofia",
  divisao: "B",
  musculos: "Superiores completo",
  exercicios: [
    { nome: "Supino reto com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Puxada na polia alta", serie: 4, repeticoes: "6-12" },
    { nome: "Remada unilateral com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Desenvolvimento com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Rosca direta com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Tríceps na polia alta", serie: 4, repeticoes: "6-12" }
  ],
  cardio: "Escada",
  tempo: "25 minutos"
},

{
  fkPerfil: 11,
  perfil: "Mulher Intermediário — Hipertrofia",
  divisao: "C",
  musculos: "Glúteo e posterior",
  exercicios: [
    { nome: "Hip thrust com barra", serie: 4, repeticoes: "6-12" },
    { nome: "Peso morto romeno", serie: 4, repeticoes: "6-12" },
    { nome: "Avanço com halteres", serie: 4, repeticoes: "6-12" },
    { nome: "Glute bridge com peso", serie: 4, repeticoes: "6-12" },
    { nome: "Cadeira abdutora", serie: 4, repeticoes: "6-12" },
    { nome: "Leg curl", serie: 4, repeticoes: "6-12" }
  ],
  cardio: "Escada",
  tempo: "25 minutos"
},
{
  fkPerfil: 12,
    perfil: "Mulher Avançado — Hipertrofia",
    divisao: "A",
    musculos: "Quadríceps",
    exercicios: [
      { nome: "Agachamento com barra", serie: "4-5", repeticoes: "6-12" },
      { nome: "Leg press 45°", serie: "4-5", repeticoes: "6-12" },
      { nome: "Hack squat", serie: "4-5", repeticoes: "6-12" },
      { nome: "Agachamento sumô com barra", serie: "4-5", repeticoes: "6-12" },
      { nome: "Leg extension", serie: "4-5", repeticoes: "6-12" },
      { nome: "Avanço com halteres", serie: "4-5", repeticoes: "6-12" }
    ],
    cardio: "Esteira",
    tempo: "25 minutos"
  },

  {
    fkPerfil: 12,
    perfil: "Mulher Avançado — Hipertrofia",
    divisao: "B",
    musculos: "Superiores Completo",
    exercicios: [
      { nome: "Supino reto com barra", serie: "4-5", repeticoes: "6-12" },
      { nome: "Remada curvada com barra", serie: "4-5", repeticoes: "6-12" },
      { nome: "Puxada na polia alta", serie: "4-5", repeticoes: "6-12" },
      { nome: "Desenvolvimento com halteres", serie: "4-5", repeticoes: "6-12" },
      { nome: "Rosca direta com barra", serie: "4-5", repeticoes: "6-12" },
      { nome: "Tríceps pushdown na polia alta", serie: "4-5", repeticoes: "6-12" }
    ],
    cardio: "Esteira",
    tempo: "25 minutos"
  },

  {
    fkPerfil: 12,
    perfil: "Mulher Avançado — Hipertrofia",
    divisao: "C",
    musculos: "Glúteo e Posterior",
    exercicios: [
      { nome: "Hip thrust com barra", serie: "4-5", repeticoes: "6-12" },
      { nome: "Peso morto romeno", serie: "4-5", repeticoes: "6-12" },
      { nome: "Avanço com halteres", serie: "4-5", repeticoes: "6-12" },
      { nome: "Glute bridge com barra", serie: "4-5", repeticoes: "6-12" },
      { nome: "Cadeira abdutora", serie: "4-5", repeticoes: "6-12" },
      { nome: "Leg curl", serie: "4-5", repeticoes: "6-12" }
    ],
    cardio: "Esteira",
    tempo: "25 minutos"
  }
]