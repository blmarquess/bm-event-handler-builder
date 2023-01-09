const exempleShape = {
  key: "ilea_001",
  indemnity: "",
  name: "Consultas por vídeo GRÁTIS com o clínico geral",
  description: "Faça todos os meses uma consulta médica gratuita ...",
  bodyassist:
    "Você tem uma consulta médica, por vídeo, disponível todos os meses.",
};

const bodyassistsDb = {
  ilea_001: { bodyassist: "Você tem uma consulta médica, por vídeo, " },
  ilea_002: { bodyassist: "Você, seu cônjuge e filhos até 21 anos podem " },
  ilea_003: { bodyassist: "10 sessões de terapia com um psicólogo por ano! " },
  ilea_004: { bodyassist: "Sua família recebe até 5 mil reais para  etc.)." },
};

const assistsInDB = [
  {
    key: "ilea_001",
    indemnity: "",
    name: "Consultas por vídeo GRÁTIS com o clínico geral",
    description: "Faça todos os meses uma consulta médica gratuita e ",
  },
  {
    key: "ilea_002",
    indemnity: "",
    name: "Consultas por vídeo GRÁTIS com o clínico geral",
    description: "Faça todos os meses uma consulta médica gratuita e ",
  },
  {
    key: "ilea_003",
    indemnity: "",
    name: "Consultas por vídeo GRÁTIS com o clínico geral",
    description: "Faça todos os meses uma consulta médica gratuita e ",
  },
  {
    key: "ilea_004",
    indemnity: "",
    name: "Consultas por vídeo GRÁTIS com o clínico geral",
    description: "Faça todos os meses uma consulta médica gratuita e ",
  },
];

const expectedResult = [
  {
    key: "ilea_001",
    indemnity: "",
    name: "Consultas por vídeo GRÁTIS com o clínico geral",
    description: "Faça todos os meses uma consulta médica gratuita e ",
    bodyassist: "Você tem uma consulta médica, por vídeo, ",
  },
  {
    key: "ilea_002",
    indemnity: "",
    name: "Consultas por vídeo GRÁTIS com o clínico geral",
    description: "Faça todos os meses uma consulta médica gratuita e ",
    bodyassist: "Você, seu cônjuge e filhos até 21 anos podem ",
  },
  {
    key: "ilea_003",
    indemnity: "",
    name: "Consultas por vídeo GRÁTIS com o clínico geral",
    description: "Faça todos os meses uma consulta médica gratuita e ",
    bodyassist: "10 sessões de terapia com um psicólogo por ano! ",
  },
  {
    key: "ilea_004",
    indemnity: "",
    name: "Consultas por vídeo GRÁTIS com o clínico geral",
    description: "Faça todos os meses uma consulta médica gratuita e ",
    bodyassist: "Sua família recebe até 5 mil reais para  etc.).",
  },
];

it("Objetos de assistem tem que ficar todos com o mesmo shape do exemplo e informações corretas:", () => {
  const assists = assistsInDB.map((item) =>
    Object.assign(item, bodyassistsDb[item.key])
  );
  expect(assists).toEqual(expectedResult);
});
