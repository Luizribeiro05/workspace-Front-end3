let notas = [7, 8, 9];

console.log("A primeira nota do aluno é: " + notas[0]);

console.log("A segunda nota do aluno é: " + notas[1]);

console.log("A terceira nota do aluno é: " + notas[2]);

let sum = 0;
for (let i = 0; i < notas.length; i++) {
  sum += notas[i];
}
let average = sum / notas.length;
console.log("A média do aluno é: " + average);