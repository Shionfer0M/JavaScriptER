// UTILIZA EL PARÁMETRO rest CON PARÁMETROS DE FUNCIÓN 
const sum = (...args) => {
  //const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
sum(0,1,2);
/*
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
La consola mostrará las cadenas You have passed 3 arguments. y You have passed 4 arguments..
El parámetro rest elimina la necesidad de comprobar el arreglo args y nos permite aplicar map(), filter() y reduce() en el arreglo de parámetros.
*/