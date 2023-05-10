function retornaFuncao(nome){
    // const nome = 'Luiz';
    return function(){
        // Funcao closure, irá encerrar a funcao pai, tem a funcao de fechar o escopo
        return nome;
    };
}

const funcao = retornaFuncao('Gustavo');
const funcao2 = retornaFuncao('Luis');
console.log(funcao());
console.log(funcao2());