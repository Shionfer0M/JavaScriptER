// Escribe una función nextInLineque tome un arreglo ( arr) y un número ( item) como argumentos.
// Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.
function nextInLine(arr, item) {
  // Cambia solo el código debajo de esta línea
  item = arr.push(item);
  item = arr.shift();
  return item;
  // Cambia solo el código encima de esta línea
}

// Configuración
var testArr = [1,2,3,4,5];

// Muestra el código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));