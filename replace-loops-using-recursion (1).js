// Usando recursión recursión es utilizar la misma función sin necesidad de utilizar un for
// La recursividad es el concepto de que una función se puede expresar en términos de sí misma.
function sum(arr, n) {
  // Only change code below this line
  if(n<=0){
    return 0;
  } else{
    // se toma la función o el arreglo sum(arr,n-1) y se va suando cada elemento arr[n-1];
    return sum(arr, n-1) + arr[n-1];
  }
  // Only change code above this line
}
console.log(sum([1],0));
console.log(sum([2,3,4],1));
console.log(sum([2,3,4,5],3));

// Nota: Las funciones recursivas deben tener un caso base cuando regresan sin llamar a la función nuevamente (en este ejemplo, cuando n <= 0), de lo contrario, nunca podrán terminar de ejecutarse.