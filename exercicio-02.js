/**
 * Faça um programa que receba o nome e idade do usuário e retorne:
 * - o nome do usuário;
 * - se ele é menor ou maior de idade;
 */
   let nome = prompt("Digite seu nome:");
   let idade = parseInt(prompt("Digite sua idade:"));
  
   let resultado ="menor";
   if (idade >= 18) {
    resultado = "maior"
   }
   alert(`${nome} é ${resultado} de idade.`);