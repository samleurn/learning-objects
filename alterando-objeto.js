const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

//Adicionando elemento no objeto
estudante.telefone = '551199999999';
console.log(estudante.telefone);
console.log(estudante);

//Alterando o nome
estudante.nome = 'José Souza';
console.log(estudante);

//criando um objeto vazio e adicionando elementos
const estudante2 = {};
estudante2.nome = 'Ana Maria'
console.log(estudante2);