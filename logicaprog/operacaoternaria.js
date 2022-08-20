// operacao ternaria  ?(se for verdadeiro) : (se for falso)

const pontuacaoUsuario = 9929;

const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario Normal";

const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);
/*
if(pontuacaoUsuario >= 1000){
  console.log('Usuario VIP');
} else {
  console.log('Usuario Normal');
}
*/
