// strings são indexadas, já as arrays são indexadas por elementos(luiz = 1, maria = 2, joao = 3)

const alunos = ["Luiz", "Maria", "João"];
console.log(alunos);
console.log(alunos[0]); // mostrar o elemento de índice 0

alunos[0] = "Gustavo";
alunos[3] = "Fernando";
console.log(alunos.length); // tamanho da array;
console.log(alunos);
alunos[alunos.length] = "Luiza";
alunos[alunos.length] = "Carlos";
alunos[alunos.length] = "Bianca";
alunos.push("Patrick"); // empurra o elemento para o fim na lista
alunos.unshift("Leonardo"); // adiciona o elemento no inicio na lista
const removido = alunos.pop(); // remove do fim

const removido2 = alunos.shift(); // remove do começo

console.log(removido2); // ver quem foi removido do inicio
console.log(removido); // ver quem foi removido
console.log(alunos.slice(0, 2)); // mostra dois índices 0,1
console.log(alunos.slice(0, -2)); // mostrará a lista menos os ultimos 2 elementos
console.log(alunos);

console.log(typeof alunos);
console.log(alunos instanceof Array); // true = alunos == array
