// Declarando funcao (FUNCTION HOISTING = a funcao declarada dessa maneira: )
function fala(){
    console.log("Hello World");
}

fala();


// First-class objects (Objetos de primeira classe)
// utilizar a funcao como um dado, um valor de uma variavel
const souUmDado = function (){
    console.log("Sou um dado.");
}
souUmDado();

function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

// ARROW FUNCTION
// QUANDO VOU USAR???? *************************
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}


// Dentro de um objeto
const obj = {
    falar: function () {
        console.log("Estou falando.");
    }
};

// executando funcao dentro do objeto.
obj.falar();