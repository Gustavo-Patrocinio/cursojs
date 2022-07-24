// ex 1 
{
const num1 = 5, num2 = 3;
let sub;
sub = num1 - num2;
console.log('O resultado é:', sub);
}

// ex 2 
{
const num1 = 10,num2 = 5;
let mult;
mult = num1*num2;
console.log('O resultado é:', mult);
}

// ex 3
{
    const num1 = 200,num2 = 0;
    let div;
    div = num1 / num2;
    if(num2 == 0){
        console.log ('Não é possível fazer divisão por 0');
    }
    else 
        console.log('O resultado da divisão é:', div);

}

// ex 4
{
    const nota1 = 5,nota2 = 10;
    let media;
    media = (nota1 + nota2)/2;

    console.log('Sua media eh:', media);

    if(media < 6){
        console.log('Sua nota esta abaixo da media.');
    }
    else 
        console.log('Sua nota esta na media.');
    
}

// ex 5

{
    const preco = 500,desconto = 0.10;
    let valor_novo;
    valor_desconto = preco * desconto;
    valor_novo = preco - valor_desconto;
    console.log('\n\n','O novo valor eh',valor_novo,'\n');
}

// ex 6
{
    const comissao = 0.04,salario_fixo = 1000;
    let salario_final,valor_venda;

    salario_final = salario_fixo + (salario_fixo * comissao);
    valor_venda = salario_final - salario_fixo;
    console.log('O salario fixo eh:', salario_fixo);
    console.log('O valor das vendas eh:', valor_venda);
    console.log('O salario final eh:', salario_final);
}

// ex 7 
{

    for(let i=0; i < 11; i++){
        calculadora = 5 * i
        console.log('5 *', i, '=', calculadora, '\n')

    }
}

// ex 8

{
    const ano_nascimento = 2002, ano_atual = 2022;
    let idade,idade_meses,idade_dias;
    idade = ano_atual - ano_nascimento;
    idade_meses = idade * 12;
    idade_dias = idade * 365;
    console.log('\n\nSua idade eh:', idade);
    console.log('Sua idade em meses eh:',idade_meses);
    console.log('Sua idade em dias eh:', idade_dias);
}