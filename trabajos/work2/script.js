var contrasena = "";
const longitudFinal = document.querySelector("#testpass");
const valorBarra = document.querySelector("#barra");
const contraFinal = document.querySelector("#contrafinal");
const iconoContra = document.querySelector("#icono");
const reload = document.querySelector("#reload");
var chekes = document.querySelectorAll('.cheke');



const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!#$%&()*+-/:<>?@[]^_{|}~";

var estructuraContra = "";
var puntosContra = 0;

longitudFinal.innerHTML = valorBarra.value;

function chekear() {
  estructuraContra = "";

  var isChecked = document.getElementById("caracteres1").checked;

  if (isChecked) {
    estructuraContra += mayusculas;
  }
  isChecked = document.getElementById("caracteres2").checked;

  if (isChecked) {
    estructuraContra += minusculas;
  }

  isChecked = document.getElementById("caracteres3").checked;

  if (isChecked) {
    estructuraContra += numeros;
  }

  isChecked = document.getElementById("caracteres4").checked;

  if (isChecked) {
    estructuraContra += simbolos;
  }
}

function seguridadContra() {

  puntosContra = 0;
  if (valorBarra.value > 11) {
    puntosContra += 4;
  } else if (valorBarra.value > 7) {
    puntosContra += 3;
  } else {
    puntosContra += 0;
  }

  var isChecked = document.getElementById("caracteres1").checked;

  if (isChecked) {
    puntosContra += 1;
  }
  isChecked = document.getElementById("caracteres2").checked;

  if (isChecked) {
    puntosContra += 1;
  }

  isChecked = document.getElementById("caracteres3").checked;

  if (isChecked) {
    puntosContra += 1;
  }

  isChecked = document.getElementById("caracteres4").checked;

  if (isChecked) {
    puntosContra += 1;
  }

  if (puntosContra <= 4){
    iconoContra.innerHTML =  '<i class="fa-solid fa-circle-xmark"></i>';
    iconoContra.style.color = "#bf616a";
  }else if(puntosContra <= 6){
    iconoContra.innerHTML =  '<i class="fa-solid fa-circle-check"></i>';
    iconoContra.style.color = "#ebcb8b";
  }else{
    iconoContra.innerHTML =  '<i class="fa-solid fa-circle-check"></i>';
    iconoContra.style.color = "#a3be8c";
   
  }

  
}

function codigoPrincipal() {

  contrasena = "";
  longitudFinal.innerHTML = valorBarra.value;

  chekear();

  for (let i = 0; i < valorBarra.value; i++) {
    contrasena += estructuraContra.charAt(
      Math.floor(Math.random() * estructuraContra.length)
    );
  }

  contraFinal.value = contrasena;

  seguridadContra();

}

onload = function(){

  codigoPrincipal();
 
};

valorBarra.oninput = function () {
 

  codigoPrincipal();

};

reload.onclick = function(){

  codigoPrincipal();

};


for(var i = 0; i<chekes.length; i++) {
  chekes[i].onchange = function () {

    codigoPrincipal();
   
  }
};


