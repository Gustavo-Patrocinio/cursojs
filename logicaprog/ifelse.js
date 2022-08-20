const hora = 10;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia!!");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde!!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite!!");
} else {
  console.log("Por favor, digite um horario de 0h a 23h");
}

const numero = 4;
if (numero >= 0 && numero <= 5) {
  console.log("O numero esta entre 0 e 5.");
} else if (numero >= 6 && numero <= 8) {
  console.log("O numero esta entre 6 e 8");
} else if (numero >= 9 && numero <= 11) {
  console.log("O numero esta entre 9 e 11");
} else {
  console.log("O numero nao esta entre 0 e 11");
}
