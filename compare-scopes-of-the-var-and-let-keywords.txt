function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
// se puede declarar 2 veces la misma letra con i porque su alcance no el global 
// La diferencia de let y var esque var tiene más alcance si se utiliza let en un bucle solo funciona en ese bucle
//  Cuando declaras una variable con la letpalabra clave dentro de un bloque, declaración o expresión, su alcance se limita a ese bloque, declaración o expresión.