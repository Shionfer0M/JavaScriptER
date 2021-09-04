// ESCRIBE FUNCIONES FLECHA CON PARÁMETROS
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

/*
Al igual que una función regular, puedes pasar argumentos a una función flecha.

const doubler = (item) => item * 2;
doubler(4);

doubler(4) devolvería el valor 8.

También 
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
*/