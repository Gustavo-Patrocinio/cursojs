const pessoa = {
  nome: "Gustavo",
  sobrenome: "Patrocinio",
  idade: 19,
  endereco: {
    rua: "av brasil",
    numero: 320,
  },
};

//const nome = pessoa.nome;
// desestruturacao:
const { idade, sobrenome, nome } = pessoa; //extraindo idade do objeto nome
const { nome: nomeburro } = pessoa;
console.log(nome, sobrenome, nomeburro, idade);
const {
  endereco: { rua, numero },
} = pessoa;
console.log(rua);
