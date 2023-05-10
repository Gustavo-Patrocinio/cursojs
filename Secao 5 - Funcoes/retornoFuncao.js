// RETURN = RETORNA UM VALOR, A FUNCAO TERMINA.
// Existe funcoes que retornam ou não valor

function soma(a,b){
    return a + b;
}

function soma2(a,b){
    console.log(a+b);
}

soma(1,2);
soma2(10,11);
let s1 = soma(3,5);
console.log(s1);

function criaPessoa(nome, sobrenome){
    return {nome,sobrenome};
}
const p1 = criaPessoa('David', 'Fagundes');
console.log(criaPessoa('Gustavo ', 'Patrocinio'));
console.log(p1);

function criaMultiplicador(multiplicador){    
    return function(n){
        return n* multiplicador;
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(3));
console.log(triplica(3));
console.log(quadriplica(3));