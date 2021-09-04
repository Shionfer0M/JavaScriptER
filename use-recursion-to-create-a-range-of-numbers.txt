// Esta función obtiene 2 numeros donde se tienen que sacar el rango de la matriz siendo como endNum-startNum y dandole push a cada numero que integre ese rango agregandolos en una matriz
function rangeOfNumbers(startNum, endNum) {
  if(startNum == endNum){
    return [startNum];
    } else {
      var matrizrango = rangeOfNumbers(startNum,endNum-1);  
      matrizrango.push(endNum);
      return matrizrango
    }
};

console.log(rangeOfNumbers(1,5));

/* Esto también sirve 
function rangeOfNumbers(startNum, endNum) {
  if(startNum == endNum){
    return [startNum];
  } else {
    //var matrizrango = endNum - startNum;
    const matrizSN = [];
    var rango = (endNum+1)-startNum;
    for(var i=startNum; i<=endNum; i++){
      matrizSN.push(i)
    }
    //matrizSN.push();
    //return rango;
    return matrizSN;
  }
};
*/