//  Para asegurarse de que sus datos no cambien, JavaScript proporciona una función Object.freezepara evitar la mutación de datos.
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  // Aqui congelamos el objeto para que ya no sea mutable con const utilizando Object.freeze()
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();