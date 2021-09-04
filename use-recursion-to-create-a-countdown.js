// Recursión se trata llamar en si misma a la función o ocuparla en si misma 
// Only change code below this line
// Aqui ocupamos recursividad llamando a la misma función utilizamos unshift()
function countdown(n){
  if (n < 1){
    return [];
  } else {
    var countArrayR = countdown(n-1);
    countArrayR.unshift(n);
    return countArrayR;
  }
}
console.log(countdown(5));
// Only change code above this line