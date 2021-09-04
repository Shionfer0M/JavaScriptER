// utilizando la declaración de la variable const especificamente que cuando se declara ya no se puede reasignar
// Una práctica común al nombrar constantes es usar todas las letras mayúsculas, con palabras separadas por un guión bajo.
function printManyTimes(str) {

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");

// const contiene todas las características increíbles que lettiene, con la ventaja adicional de que las variables declaradas usando constson de solo lectura. Son un valor constante, lo que significa que una vez que se asigna una variable const, no se puede reasignar.

