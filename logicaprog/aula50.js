// let a = "A";
// let b = "B";
// let c = "C";

// // const numeros = [1, 2, 3];
// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const segundoNumero = numeros[1];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);
