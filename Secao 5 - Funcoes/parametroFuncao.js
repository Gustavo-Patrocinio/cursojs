function funcao(a,b) {
    console.log(a + b);
}

funcao(7,8);

// Variavel ARGUMENTS representa os argumentos passados na hora de executar a funcao.
function funcao2() {
    // console.log(arguments);
    // console.log(arguments[0]);
    let total = 0;
    for (let argumento of arguments) {
        total +=argumento;
    }
    console.log(total)

}
funcao2(7,8,1,2,3,31,4);

function funcao3({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
}
//devo passar os dados em um objeto no parametro
// funcao3({nome: 'Gustavo', sobrenome: 'Patrocinio',idade: 20});
let obj = ({nome: 'Gustavo', sobrenome: 'Patrocinio',idade: 20});
funcao3(obj);

console.log('\n\n\n\n\n\n');
// ... = rest operator == pega todos os elementos do parametro
// vai receber o operador, o acumulador e todo o resto do parametro em numeros
function conta(operador, acumulador, ...numeros){
    // in = retorna os indices de numeros
    // of
    for(let numero of numeros){
        if(operador === '+'){
            console.log(acumulador+=numero);
        }   if(operador === '-'){
                console.log(acumulador-=numero);
            }   if(operador === '*'){
                    console.log(acumulador*=numero);
                }
    };
}
conta('*', 1, 20,30,40,50);