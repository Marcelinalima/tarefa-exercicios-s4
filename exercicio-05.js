/**
 * Faça um programa que receba o mês e retorne o total de dias
 * 
 * janeiro = 31 dias
 * fevereiro = 28 dias
 * março = 31 dias
 * abril = 30 dias
 * maio = 31 dias
 * junho = 30 dias
 * julho = 31 dias
 * agosto = 31 dias
 * setembro = 30 dias
 * outubro = 31 dias
 * novembro = 30 dias
 * dezembro = 31 dias
*/
let mes = prompt("Digite o mês:");

const meses = {
    janeiro: 31,
    fevereiro: 28,
    março: 31,
    abril: 30,
    maio: 31,
    junho: 30,
    julho: 31,
    agosto: 31,
    setembro: 30,
    outubro: 31,
    novembro: 30,
    dezembro: 31,
  };
  if (!meses[mes]) {
    alert("mes não encontrado");
  } else {
    alert(`O mes ${mes} tem ${meses[mes]} dias`);
  }