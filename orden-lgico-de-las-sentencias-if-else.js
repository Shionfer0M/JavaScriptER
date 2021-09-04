// Utilizando else fi va en orden de ejecución así que hay que tener en cuenta en que orden se pone ya que va de arriba a abajo
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  }
  else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);