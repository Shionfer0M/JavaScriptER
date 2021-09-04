/* Una tarea común en JavaScript es iterar a través del contenido de una matriz. Una forma de hacerlo es con un forbucle. Este código enviará cada elemento de la matriz arra la consola */
// Setup
// iterando el arreglo o matriz y sumando cada valor
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for(var i=0; i<myArr.length; i++){
  total += myArr[i];
}
console.log(total);
// Only change code below this line