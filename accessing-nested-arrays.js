/* Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como matrices anidadas. De manera similar al acceso a objetos anidados, la notación de corchetes de matriz se puede encadenar para acceder a matrices anidadas.
*/
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
// Accediendo a un subjeto o subpropiedad y asginandolo a secondTree
var secondTree = myPlants[1].list[1];