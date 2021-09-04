// Utilizando sintaxis de desestructuración para asignar variables desde objetos
// Es para utilizar destructuración pero cambiamos el nombre de la variable
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Cambia solo el código debajo de esta línea
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
//const highToday = HIGH_TEMPERATURES.today;
//const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Cambia solo el código encima de esta línea