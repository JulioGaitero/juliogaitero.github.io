// DOM Elements
const hora = document.getElementById('hora');
const dia = document.getElementById('dia');
const saludo = document.getElementById('saludo');
const cita = document.getElementById('cita');
const busqueda = document.getElementById('busqueda');

let citas= ["Uno se es fiel a sí mismo y se basta.",
"Al principio todos los pensamientos pertenecen al amor. Después, todo el amor pertenece a los pensamientos.",
"La puerta de la felicidad se abre hacia dentro, hay que retirarse un poco para abrirla: si uno la empuja, la cierra cada vez más.",
"Sólo falta el tiempo a quien no sabe aprovecharlo.",
"La posibilidad de realizar un sueño es lo que hace que la vida sea interesante.",
"Nunca desistas de un sueño. Sólo trata de ver las señales que te lleven a él.",
"Un hombre que no se alimenta de sus sueños envejece pronto.",
"Siempre sueña y apunta más alto de lo que sabes que puedes lograr.",
"Si deseas que tus sueños se hagan realidad ¡despierta!.",
"El futuro pertenece a quienes creen en la belleza de sus sueños.",
"Sólo cerrando las puertas detrás de uno se abren ventanas hacia el porvenir.",
"Sólo hay dos palancas que muevan a los hombres: el miedo y el interés.",
"Actuar es fácil, pensar es difícil; actuar según se piensa es aún más difícil.",
"Somos lo que hacemos, no lo que pensamos ni lo que sentimos.",
"Las voluntades débiles se traducen en discursos; las fuertes, en actos.",
"Nuestra naturaleza está en la acción. El reposo presagia la muerte.",
"Siempre se debe preferir la acción a la crítica.",
"La acción no debe ser una reacción sino una creación.",
"Vivir no consiste en respirar sino en obrar.",
"Lo urgente generalmente atenta contra lo necesario.",
"Si supiera que el mundo se acaba mañana, yo, hoy todavía, plantaría un árbol.",
"Si ayudo a una sola persona a tener esperanza, no habré vivido en vano.",
"La esperanza es el sueño del hombre despierto.",
"Salen errados nuestros cálculos siempre que entran en ellos el temor o la esperanza.",
"El sol no se ha puesto aún por última vez.",
"El miedo siempre está dispuesto a ver las cosas peor de lo que son.",
"Cualquier esfuerzo resulta ligero con el hábito.",
"La verdad puede eclipsarse pero no extinguirse.",
"Olvidemos lo que ya sucedió, pues puede lamentarse, pero no rehacerse"
]

busqueda.onclick = function(){
  busqueda.value = "";
}

// Funcion que muestra el reloj.
function mostrarHora() {
  let hoy = new Date(),
    h = hoy.getHours(),
    m = hoy.getMinutes(),
    s = hoy.getSeconds();


  // Output Time
  
  hora.innerHTML = `${cerosIzquierda(h)}<span>:</span>${cerosIzquierda(m)}<span>:</span>${cerosIzquierda(s)} `;

  setTimeout(mostrarHora, 1000);
}

// Funcion para añadir cerros a la izquierda en la hora
function cerosIzquierda(t) {

// Si es mas pequeño que 10 retorna un 0, si es mas grande un espacio nada.
  return (parseInt(t, 10) < 10 ? '0' : '') + t;
}

// Funcion que muestra el dia

function mostrarDia(){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    let fecha= new Date();
    let d = fecha.getDate();
    let m = fecha.getMonth();
    let a = fecha.getFullYear();
    dia.innerHTML = d + " de " + meses[m] + " del " + a;


}

function mostrarCita(){
    let aleatorio =  Math.floor((Math.random() * (citas.length - 0 + 1)) + 0);
    cita.innerHTML = citas[aleatorio];
}


function mostarFondo() {
  let today = new Date(),
    hora = today.getHours();

  if (hora < 12) {
    // Morning
    document.body.style.backgroundImage = "url('img/mananas.jpg')";
    
 
  } else if (hora < 20) {
    // Afternoon
    document.body.style.backgroundImage = "url('img/tarde.jpg')";

  } else {
    // Evening
    document.body.style.backgroundImage = "url('img/noche.jpg')";

    document.body.style.color = 'white';
  }
}

// Run
mostrarHora();
mostrarDia();
mostrarCita();
mostarFondo();
