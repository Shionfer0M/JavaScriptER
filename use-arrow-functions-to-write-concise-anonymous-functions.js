/* Si pasamos una función a otra función 
y que la función que pasamos como argumento ya no la ocuparemos
solo en esa función osea ya no la reutilizaremos
podemos utilizar la función tipo flecha */

const magic = () => {return new Date()};

/* Ejemplo
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
Sería.....
const myFunc = () => {
  const myVar = "value";
  return myVar;
}

Cuando no hay un cuerpo de función, y solo un valor de retorno, la sintaxis de la función de flecha le permite omitir la palabra clave return, así como los corchetes que rodean el código. Esto ayuda a simplificar funciones más pequeñas en declaraciones de una línea:
const myFunc = () => "value";
Este código seguirá devolviendo la cadena valuede forma predeterminada.
*/