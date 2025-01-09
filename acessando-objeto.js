const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
const professor = {
  nome: 'Maria',
  idade: 25,
  cpf: '987987987',
  turma: 'Python'
}

estudante.nome //josé

function exibeInfoEstudante(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante];
}

//Modo de acesso direto no objeto
console.log(estudante['nome']);
console.log(estudante['cpf']);

//Modo usando a função
console.log(exibeInfoEstudante(professor, 'nome'));
console.log(exibeInfoEstudante(professor, 'cpf'));
