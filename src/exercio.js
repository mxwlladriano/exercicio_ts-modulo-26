"use strict";
// Função de multiplicação
function multiplicar(a, b) {
    return a * b;
}
// Função de saudação
function saudacao(nome) {
    return "Olá " + nome;
}
const resultadoMultiplicacao = multiplicar(5, 3);
const mensagemSaudacao = saudacao("Maria");
console.log(resultadoMultiplicacao); // Saída = 15
console.log(mensagemSaudacao); // Saída = "Olá Maria"
