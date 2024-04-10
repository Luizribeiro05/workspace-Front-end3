function dobrarNumeros(lista) {
  return lista.map(numero => numero * 2);
}

const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = dobrarNumeros(numeros);

console.log('Lista de números:', numeros);
console.log('Lista de números dobrados:', numerosDobrados);