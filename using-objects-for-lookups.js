// En vez de switch case podemos poner un objeto 
// Setup
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank'
  };
  //Accediendo a un valor como un arreglo 
  result = lookup[val];
  console.log(result);
  // Only change code below this line
  /*
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
  */
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");