// Ahora hacer una función que permita calcular números aleatorios conforme a un rango tomando un min y un max y ya no empezar desde 0 como anterioridad
// Math.floor(Math.random() * (max - min + 1)) + min
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}