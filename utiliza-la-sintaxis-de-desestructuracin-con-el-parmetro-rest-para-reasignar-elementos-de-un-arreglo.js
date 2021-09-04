// Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Cambia solo el código debajo de esta línea
  'use strict';
  const [a,b, ...arr] = list; // Cambia esta línea
  // Cambia solo el código encima de esta línea
  return arr;
}
const arr = removeFirstTwo(source);

console.log(arr);
console.log(source);

/* 
El resultado es similar a Array.prototype.slice(), como se muestra a continuación:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
La consola mostrará los valores 1, 2 y [3, 4, 5, 7].
*/