// Accediendo a subpropiedades de un objeto en arreglos o subobjetos
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
//Accediendo a una subpropiedad
var gloveBoxContents = myStorage.car.inside['glove box'];
console.log(gloveBoxContents);