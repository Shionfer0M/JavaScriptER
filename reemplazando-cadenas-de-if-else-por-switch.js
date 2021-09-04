// Si se tiene muchas opciones en vez de ocupar if/ else if mejor ocupemos un switch
// Si no ponemos la palabra break; se ejecutan los demas casos
function chainToSwitch(val) {
  var answer = "";
  // Cambia solo el código debajo de esta línea
  switch(val){
    case 'bob':
      answer = 'Marley';
      break;
    case 42:
      answer = 'The Answer';
      break;
    case 1:
      answer = 'There is no #1';
      break;
    case 99:
      answer = 'Missed me by this much!';
      break;
    case 'John':
    case 156:
      answer = '';
      break;
    default:
      answer = 'Ate Nine';
      break;
  }
  /* Esto lo cambiamos por switch
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  */
  // Cambia solo el código encima de esta línea
  return answer;
}

chainToSwitch(7);