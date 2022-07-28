let num1 = 9.54123;
let num2 = Math.floor(num1); // arredondando o num1 pra baixo
let num3 = Math.ceil(num1); // arredondando o num1 pra cima
let num4 = Math.round(num1); // arredondando o num1 para o mais próximo
console.log(num2, num3, num4);
console.log(
  Math.max(1, 2, 32, 31, 4, 1, 4, 5, 6, 7, 8, 88, 203123, 423, 1, 4, 124, 22)
); // seleciona o maior numero
console.log(
  Math.min(1, 2, 32, 31, 4, 1, 4, 5, 6, 7, 8, 88, 203123, 423, 1, 4, 124, 22)
); // seleciona o menor numero
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);
console.log(Math.pow(2, 10)); // elevar um numero
console.log(2 ** 10); // elevar um numero

let num5 = 9;
console.log(num5 ** 0.5); // raíz quadrada
