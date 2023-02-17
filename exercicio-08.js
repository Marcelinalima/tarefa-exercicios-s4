/**
 * faça um algoritmo que receba um número entre 1 e 21 e retorne o fatorial
 * 
*/
const numero = Number(prompt("digite o numero"));

if(numero >= 1 && numero <=21){
  let resultado = 1;

  for(let i = 1; i<=numero; i++){
    resultado *=i;
  }

  alert(`o fatorial de ${numero} é ${resultado}`)
}