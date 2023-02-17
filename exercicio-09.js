/**
 * faça um algoritmo que receba um número e retorne a tabuada desse número de acordo com o exemplo abaixo:
 * 
 * 1 x 1 = 1
 * 1 x 2 = 2
 * 1 x 3 = 3
 * 1 x 4 = 4
 * 1 x 5 = 5
 * 1 x 6 = 6
 * 1 x 7 = 7
 * 1 x 8 = 8
 * 1 x 9 = 9
 * 1 x 10 = 10
*/
let number = parseInt(prompt("Insira um número: "));

for (let i = 1; i <= 10; i++) {
   console.log(number + " x " + i + " = " + number * i);
}
    

    