// Math.floor() redonde un número entero más cercano
// Math.random() nunca puede devolver un 1 y, debido a que estamos redondeando hacia abajo, es imposible obtenerlo 20. Esta técnica nos dará un número entero entre 0y 19.

// Así podemos generar número aleatorios poniendo un número que indique el rango
function randomWholeNum() {
  
  // Only change code below this line
  return Math.floor(Math.random()*10);
}

/* Poniendo así esta función junta podemos obtener números random o aleatorios entre 0 y 20 pero como se redondea el mas cercando es hasta 19 
Math.floor(Math.random() * 20);
Estamos llamando Math.random(), multiplicando el resultado por 20, luego pasando el valor a la Math.floor()función para redondear el valor al número entero más cercano.
*/