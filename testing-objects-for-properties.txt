// la palabra hasOwnProperty(propname) dice si la propiedad existe o no en el objeto ya que devuelve true o false
function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }else{
    return 'Not Found';
  }
  // Only change code above this line
}