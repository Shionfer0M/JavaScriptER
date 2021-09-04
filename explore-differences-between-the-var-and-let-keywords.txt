let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();

/* Uno de los mayores problemas al declarar variables con la varpalabra clave es que puede sobrescribir las declaraciones de variables sin errores. */
/* Si se va a reemplazar varcon letlas declaraciones de variables del código anterior, el resultado sería un error. */
/* EJEMPLO PARA BUSCAR ERRORES 
Tenga en cuenta el "use strict". Esto habilita el modo estricto, que detecta errores de codificación comunes y acciones "inseguras". Por ejemplo:

"use strict";
x = 3.14;

Esto mostrará un error que x is not defined. */