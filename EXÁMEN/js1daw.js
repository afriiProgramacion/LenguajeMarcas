const aMayus = texto => texto.toUpperCase();
const aMinus = texto => texto.toLowerCase();

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function calcularNeto(sueldo, impuestos) {
  return sueldo - (sueldo * impuestos / 100);
}


const form = document.querySelector("#formDatos");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", e => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const apellidos = document.querySelector("#apellidos").value;
  const ciudad = document.querySelector("#ciudad").value;
  const sueldo = Number(document.querySelector("#sueldo").value);
  const impuestos = Number(document.querySelector("#impuestos").value);
  const btndesaparecer = document.querySelector("#desaparecer").value;
  const formTarea = document.querySelector("#form-tarea");
const inputTarea = document.querySelector("#tarea");
const listaTareas = document.querySelector("#lista-tareas");
const botonAgregar = document.querySelector("#agregar");

  const nombreT = aMayus(nombre);
  const apellidosT = aMinus(apellidos);
  const ciudadT = capitalizar(ciudad);
  const sueldoNeto = calcularNeto(sueldo, impuestos);

  resultado.textContent = `
Datos introducidos:


Nombre: ${nombreT}
Apellidos: ${apellidosT}
Ciudad: ${ciudadT}


Sueldo bruto: ${sueldo} €
Impuestos: ${impuestos}%
Sueldo neto: ${sueldoNeto.toFixed(2)} €
   `;
   } 
); 
function agregarTarea(tarea) {

  const table = document.createElement("table");

  const textoTarea = document.createElement("span");
  textoTarea.textContent = tarea;

  const botonEliminar = document.createElement("button");
  botonEliminar.type = "button";
  botonEliminar.textContent = "Eliminar";

  table.append(textoTarea);       // añade el texto al final del li
  textoTarea.after(botonEliminar); // botón después del texto
  listaTareas.append(table);      // añade el li al final de la lista

  botonEliminar.addEventListener("click", () => {
    li.remove();
  });
} // fin agregarTarea

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  const tarea = inputTarea.value;
  if (tarea !== "") {
    agregarTarea(tarea);
    inputTarea.value = "";
  }
});
btndesaparecer.addEventListener("click",)