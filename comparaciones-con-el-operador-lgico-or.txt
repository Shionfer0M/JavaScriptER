// Utilizando or || si cualquiera de las 2 condiciones se cumple devuelve el valor o se ejecuta el if
function testLogicalOr(val) {
  // Cambia solo el código debajo de esta línea

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Cambia solo el código encima de esta línea
  return "Inside";
}

testLogicalOr(15);