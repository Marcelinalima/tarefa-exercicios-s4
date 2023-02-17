/**
 * Faça um programa que receba um número e retorne se ele é par ou impar
*/

var n = Number(prompt("Digite um numero"));
var resto = n % 2 ;

let resultado = "impar";
if (resto === 0 ) {
    resultado = "Par"
} 
    alert(resultado);