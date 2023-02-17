/**
 * faça um código que calcule a porcentagem de um número e retorne o valor encontrado:
 * o código deve:
 * - receber o valor total;
 * - receber a porcentagem (de 1 a 100);
 * - retornar o valor calculado;
*/
let valor_t = parseFloat(prompt("Digite valor total:"));
let porcentagem = parseInt(prompt("Insira a porcentagem (de 1 a 100):"));
let resultado = valor_t * (porcentagem /100);
alert(`${porcentagem}% de ${valor_t} é ${resultado}`); 

if(porcentagem >= 1 && porcentagem <= 100){
    let result = (total * porcentagem) / 100;
    alert("O valor calculado é " + result);
  }else{
    alert("porcentagem inválida")
  }
  