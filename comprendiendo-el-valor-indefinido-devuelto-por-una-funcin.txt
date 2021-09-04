// Configuración
// Una función puede incluir la declaración de devolución ( return) pero no tiene por qué hacerlo. En el caso de que la función no tenga una declaración de devolución ( return), cuando la llames, la función procesa el código interno, pero el valor devuelto es undefined(indefinido).

var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Cambia solo el código debajo de esta línea
function addFive() {
  sum = sum + 5;
}
// Cambia solo el código encima de esta línea

addThree();
addFive();