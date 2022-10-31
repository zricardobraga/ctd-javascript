function adicionar (num1, num2) {
    return num1+num2;
}

function substrair (num1, num2) {
    return num1-num2;
}

function multiplicacao (num1, num2) {
    return num1*num2;
}

function divisao (num1, num2) {
    return num1/num2;
}

console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log("Resultado da soma é: " + adicionar(10, 20));
console.log("Resultado da substração é: " + substrair(10, 20));
console.log("Resultado da multiplicação é: " + multiplicacao(10, 20));
console.log("Resultado da divisão é: " + divisao(20, 10));
console.log("Resultado da divisão por zero é: " + divisao(20, 0));

function quadradoNumero(num) {
    return multiplicacao(num, num);
}

console.log("Resultado do quadrado do número é: " + quadradoNumero(20));

function media (num1, num2, num3) {
    let resultSoma = adicionar(num1, num2) + num3;
    return divisao(resultSoma, 3);
}

console.log("Resultado da média dos três números: " + media(20, 20, 20));

function porcentagem(valorTotal, valorPercentual) {
    return divisao(multiplicacao(valorTotal, valorPercentual) , 100)
}

console.log("Resultado da porcentagem [calcula]: " + porcentagem(10, 100));

function geradorPorcentagem(){
    let resultDivisao = divisao(2, 200);
    return multiplicacao(resultDivisao, 100);
}

console.log("Resultado da gerador de porcentagem: " + geradorPorcentagem(2, 200));
