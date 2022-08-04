// {} = objeto, [] = array

// const pessoa01 = {
//   nome: "Gustavo",
//   sobrenome: "Patrocinio",
//   idade: 19,
// };

// function criaPessoa(nome, sobrenome, idade) {
//   // funcao factory, cria objetos
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade,
//   };
// }

// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }

// const pessoa02 = criaPessoa("Gustavo", "Patrocinio", 19);
// const pessoa03 = criaPessoa("Lucas", "Mello", 24);
// const pessoa04 = criaPessoa("David", "Oliveira", 23);

// console.log(nome.pessoa02, sobrenome.pessoa02);

const pessoa1 = {
  nome: "Patrick",
  sobrenome: "Souza",
  idade: 19,

  fala() {
    // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    console.log(`A minha idade atual eh ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  },
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
