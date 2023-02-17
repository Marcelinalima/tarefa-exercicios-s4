/**
 * faça um código que retorne o nome e cargo do trabalhador com maior salário, use o array de objetos abaixo
*/

const trabalhadores = [
	{
		nome: "José",
		salario_bruto: 3950.23,
		cargo: "Analista de sistemas jr",
	},
	{
		nome: "Maria",
		salario_bruto: 5900,
		cargo: "Analista de sistemas pleno",
	},
	{
		nome: "João",
		salario_bruto: 2500,
		cargo: "estagiário",
	},
	{
		nome: "Sérgio",
		salario_bruto: 3951.50,
		cargo: "Consultor financeiro",
	},
	
];

let pessoa = null;

trabalhadores.forEach(trabalhador => {
  if(!pessoa){
    pessoa = trabalhador;
  }

  if(trabalhador.salario_bruto > pessoa.salario_bruto){
    pessoa = trabalhador;
  }
})

console.log(`${pessoa.nome} do cargo ${pessoa.cargo} tem o maior salario ${pessoa.salario_bruto.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}`);
