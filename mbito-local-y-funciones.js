// Las variables declaradas dentro de una función aunque sean var solo sirver dentro de esa función no a fuera
function myLocalScope() {

  // Cambia solo el código debajo de esta línea
  var myVar = 10;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Ejecuta y verifica la consola
// myVar no está definida afuera de myLocalScope
console.log('outside myLocalScope', myVar);