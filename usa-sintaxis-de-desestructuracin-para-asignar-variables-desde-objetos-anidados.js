// Usa sintaxis de desestructuración para asignar variables desde objetos anidados
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Cambia solo el código debajo de esta línea

//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;
// Utilizando destructuración y asignando nuevo nombre a las variables del objeto anidado
const {today:{low: lowToday, high: highToday}} = LOCAL_FORECAST;
console.log(lowToday);
console.log(highToday);
// Cambia solo el código encima de esta línea

/* Ejemplo
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
Así es como se extraen los valores de propiedades de objetos y se los asigna a variables con el mismo nombre:

const { johnDoe: { age, email }} = user;
Y así es como se puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:

const { johnDoe: { age: userAge, email: userEmail }} = user;
*/