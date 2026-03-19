/* Buscamos dentro del DOM del HTML a partir del nivel más alto representado por
   el objeto document.
   querySelector - busca el primer nodo que contiene lo expresado entre paréntesis
                            y lo almacena como un Node en la constante indicada.
   querySelectorAll - busca todos los nodos que contienen lo expresado entre paréntesis
                                y los almacena como un NodeList en la constante indicada. */
/* (1) ver explicación al final del js */                        
const pantalla = document.querySelector("#pantalla");
const botones = document.querySelectorAll(".btn");
const btnIgual = document.querySelector("#igual");
const btnLimpiar = document.querySelector("#limpiar");
const btnLimpianumero = document.querySelector("#CE");
const btnCambioSigno = document.querySelector("#cambio");
const btnCambioColor = document.querySelector("#btnCambiarColor");
const selectorColor = document.querySelector("#selectorColor")
const btnCambioEstilo = document.querySelector("#btnCambiarEstilo");
const titulo = document.querySelector("#titulo");
const btncambioTeclas = document.querySelector("#btnCambiarTeclas");
const btnOperacionesEspeciales = document.querySelector("#btnOperacionesEspeciales");

// Selectores para las operaciones especiales
const btnPorcentaje = document.querySelector("[value='%']");
const btnPotencia = document.querySelector("[value='**']");
const btnSigno = document.querySelector("#cambio");

/* operación - string que guarda lo que el usuario va pulsando acumulando
                      números y operadores que representa la expresión matemática
                      completa hasta pulsar =. Es una variable global para poder utilizarla
                      a lo largo de todo el código. */
let operacion = "";
let estiloActivado = false;
let operacionesActivas = true;


/* Cada vez que se pulsa un botón de la calculadora se llama a esta función.
    Esta función va construyendo la expresión matemática en la variable operacion.
    valor - dato de entrada a la función, es el contenido de value del botón pulsado. */
function agregarValor(valor) {
  /* Añade valor a operacion, va construyendo la expresión matemática */
  operacion += valor;
  /* Almacena en el atributo value del input #pantalla la expresión matemática
     incluida en operacion. De esta forma, provoca que el contenido de operacion
     aparezca en la pantalla de la calculadora */
  pantalla.value = operacion;
}


/* Al pulsar el botón igual, calcula la expresión matemática almacenada en la variable
   operacion. */
function calcular() {
    /* eval(operacion) - transforma la expresión matemática que aparece como cadena
       de texto en la variable operacion en una operación matemática numérica y la calcula.
       El calculo de la operación matemática se almacena en la constante resultado. */
    const resultado = eval(operacion);
    /* Almacena en el atributo value del input #pantalla el resultado de la operación matemática
       provocando que el resultado aparezca en la pantalla de la calculadora. */
    pantalla.value = resultado;
    /* Transforma el resultado numérico en texto y lo almacena en la variable operacion.
        De esta forma, el usuario puede continuar realizando operaciones a partir de un
        resultado obtenido. */
    operacion = String(resultado);
}


/* Al pulsar el botón C, inicializa la calculadora, vacía la variable operacion y
   el atributo value del input #pantalla para que no aparezca nada en la pantalla
   de la calculadora */
function limpiar() {
  operacion = "";
  pantalla.value = "";
}

function limpianumero() {
    operacion = operacion.slice(0,-1);
    pantalla.value = operacion;
}

function CambioSigno() {
    if (operacion[0] == "-") {
        operacion = operacion.replace("-","")
    }
    else {
        operacion = "-" + operacion
    }
}
function CambioColor() {
    const colorSeleccionado = selectorColor.value;
    for (const boton of botones){
        if (!boton.classList.contains("op") && boton.id !== "igual" && boton.id !== "limpiar"){
            boton.style.backgroundColor = colorSeleccionado;
        }
    }
}

function CambioEstilo() {
    titulo.style.setProperty("color", "#b2868e");
    titulo.style.setProperty("font-style", "italic");
    titulo.style.setProperty("text-shadow", "2px 2px 5px rgba(0,0,0,0.6)");
}

function CambioTeclas() {
    for (const boton of botones){
        if (!boton.classList.contains("op") && boton.id !== "igual" && boton.id !== "limpiar"){
            if (estiloActivado) {
                // Volver al estilo original
                boton.style.fontWeight = "normal";
                boton.style.border = "none";
                boton.style.backgroundColor = "";
                boton.style.borderRadius = "10px";
            } else {
                // Aplicar estilo personalizado
                boton.style.fontWeight = "bold";
                boton.style.border = "2px solid #d4b2a8";
                boton.style.backgroundColor = "#d4b2a8";
                boton.style.borderRadius = "0px";
            }
        }
    }
    estiloActivado = !estiloActivado;
}

function ToggleOperacionesEspeciales() {
    // Alternar el estado
    operacionesActivas = !operacionesActivas;
    
    // Aplicar/remover la clase "desactivado" a cada botón de operación especial
    btnPorcentaje.classList.toggle("desactivado");
    btnPotencia.classList.toggle("desactivado");
    btnSigno.classList.toggle("desactivado");
    
    // Habilitar/deshabilitar los botones
    btnPorcentaje.disabled = !operacionesActivas;
    btnPotencia.disabled = !operacionesActivas;
    btnSigno.disabled = !operacionesActivas;
}


/* Recorre el NodeList almacenado en const botones tomando un botón (Node) en cada
    iteración.
    const boton : almacena un Node de botones en cada iteración del for.
    addEventListener : escucha un evento del DOM.
    "click" : evento click de botón izquierdo del ratón.
     => agregarValor(boton.value) : cuando el usuario haga clic con el ratón, se ejecuta
                                                       la función agregaValor tomando como dato de entrada
                                                       el contenido del atributo value del Node almacenado en boton */
for (const boton of botones) {
  boton.addEventListener("click", () => agregarValor(boton.value));
}


/* Cuando se haga click sobre el botón igual ejecutar la función calcular */
btnIgual.addEventListener("click", calcular);


/* Cuando se haga clic sobre el botón C ejecutar la función limpiar */
btnLimpiar.addEventListener("click", limpiar); /* (2)  Ver explicación al final de js */

btnLimpianumero.addEventListener("click", limpianumero);

btnCambioSigno.addEventListener("click", CambioSigno);

btnCambioColor.addEventListener("click", CambioColor);

btnCambioEstilo.addEventListener("click", CambioEstilo);
btncambioTeclas.addEventListener("click", CambioTeclas);
btnOperacionesEspeciales.addEventListener("click", ToggleOperacionesEspeciales);
