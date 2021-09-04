// En objetos como arreglos y funciones si se puede mutar osea cambiar aun que este declaradas con const
// Solo las variables 'sencillas' son las que no se pueden mutar por decir al ser declaradas con un numero o una cadena

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  s[0] = 2; 
  s[1] = 5; 
  s[2] = 7; 
}
editInPlace();

/*
Algunos desarrolladores prefieren asignar todas sus variables usando constde forma predeterminada, a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, usan let.
*/

/*
Sin embargo, es importante comprender que los objetos (incluidos los arreglos y las funciones) asignados a una variable mediante constsiguen siendo mutables. El uso de la constdeclaración solo evita la reasignación del identificador de variable.
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
s = [1, 2, 3]resultará en un error. El console.logmostrará el valor [5, 6, 45].
*/

