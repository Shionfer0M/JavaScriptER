// Anidación de operador ternario 
/* También puede encadenarlos para comprobar si hay varias condiciones. */
/* En la checkSignfunción, utilice varios operadores condicionales, siguiendo el formato recomendado utilizado en findGreaterOrEqual, para comprobar si un número es positivo, negativo o cero. La función debería regresar positive, negativeo zero.
*/
function checkSign(num) {
  return (num > 0) ? 'positive' :
  (num < 0) ? 'negative' : 'zero';
}

checkSign(10);

/* Ejemplo
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
} 
Se considera una buena práctica dar formato a varios operadores condicionales de modo que cada condición esté en una línea separada, como se muestra arriba.
*/