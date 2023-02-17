/**
 * Faça um programa que receba 3 número inteiros e retorne a média desses números.
 * 
 * OBS: para calcular a média some todos os números e divide pelo total de números.
*/
let valor_1 = Number(prompt('Digite o primeiro numero :'));
let valor_2 = Number(prompt('Digite o segundo numero :'));
let valor_3 = Number(prompt('Digite o terceiro numero :'));

let resultado =(valor_1 + valor_2 +valor_3) /3;

alert(`A média dos  números é ${resultado.toFixed(1)}`);
