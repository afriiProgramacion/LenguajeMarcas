// FUNCIONES DE TRANSFORMACIÓN


// Función flecha: poner en MAYÚSCULAS
const aMayus = texto => texto.toUpperCase();


// Función flecha: poner en minúsculas
const aMinus = texto => texto.toLowerCase();


// *** FUNCIÓN NORMAL 1: capitalizar ***
// Convierte la primera letra en mayúsculas, el resto a minúsculas.
function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}


// Función flecha: mostrar longitud del comentario
const infoComentario = texto =>
  `(${texto.length} caracteres)`;


// *** FUNCIÓN NORMAL: calcular sueldo neto ***
function calcularNeto(sueldo, impuestos) {
  return sueldo - (sueldo * impuestos / 100);
}


// MANEJO DEL FORMULARIO


// Busca el formulario en el DOM para poder detectar el envío (submit).
const form = document.querySelector("#formDatos");


// Busca el id="resultado" en el DOM para saber donde escribir los resultados.
const resultado = document.querySelector("#resultado");


// Cuando el usuario pulse en el botón Enviar
// ejecuta la función flecha e => {  ....... }.
// e --> evento que ocurre cuando se envía un formulario.
//         Podemos llamarlo: e, event, ev, evento
// e.preventDefault(); --> decimos al navegador que no envíe el
//                                     formulario al servidor, vamos a gestionarlo
//                                     mediante JavaScript.
form.addEventListener("submit", e => {
  e.preventDefault();


  // Busca en el DOM y guarda los valores que se han introducido en los input
  const nombre = document.querySelector("#nombre").value;
  const apellidos = document.querySelector("#apellidos").value;
  const ciudad = document.querySelector("#ciudad").value;
  const comentario = document.querySelector("#comentario").value;
  const sueldo = Number(document.querySelector("#sueldo").value);
  const impuestos = Number(document.querySelector("#impuestos").value);


  // Transformaciones
  const nombreT = aMayus(nombre);
  const apellidosT = aMinus(apellidos);
  const ciudadT = capitalizar(ciudad);
  const comentarioT = `${comentario} ${infoComentario(comentario)}`;
  const sueldoNeto = calcularNeto(sueldo, impuestos);


  // Mostrar en pantalla (multilínea)
  // textContent → propiedad de DOM que lee o cambia el texto de un nodo.


  resultado.textContent = `
Datos introducidos:


Nombre: ${nombreT}
Apellidos: ${apellidosT}
Ciudad: ${ciudadT}
Comentario: ${comentarioT}


Sueldo bruto: ${sueldo} €
Impuestos: ${impuestos}%
Sueldo neto: ${sueldoNeto.toFixed(2)} €
   `;
   } // Fin de la función flecha que se ejecuta al pulsar Enviar
); // Fin de form.addEventListener("submit", e
