// Servicio Email

const btn = document.getElementById('botonmail');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_aow317o';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mensaje Enviado! Gracias por ponerte en contacto conmigo. Te responderé lo antes posible.');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

// Menu desplegable

const menuicon = document.querySelector("#menuicon");
const menu = document.querySelector("#menu");

menuicon.addEventListener("click", function () {
  menu.classList.toggle("mostrarmenu");
  menuicon.classList.toggle("menuicon2");
});

menu.addEventListener("click", function () {
  menu.classList.toggle("mostrarmenu");
  menuicon.classList.toggle("menuicon2");
});

window.addEventListener("load", function () {
  document.getElementById("loader").classList.toggle("loader2");
});


// Efecto Revelado

window.addEventListener("scroll", revelar);
window.addEventListener("load", revelar);
function revelar() {
  var revelados = document.querySelectorAll(".revelar");

  for (var i = 0; i < revelados.length; i++) {
    var windowheight = window.innerHeight;
    var revealartop = revelados[i].getBoundingClientRect().top;
    var revealarpoint = 270;

    if (revealartop < windowheight - revealarpoint) {
        revelados[i].classList.add("active");
    } else {
        revelados[i].classList.remove("active");
    }
  }
}
  

// Barras de porcentaje 

const skillsSection = document.getElementById('titulacionesbarras');
const progressBar = document.querySelectorAll('.progress-bar');

function showProgress(){
progressBar.forEach(progressBar=> {
  const value = progressBar.dataset.progress;
  progressBar.style.opacity = 1;
  progressBar.style.width = `${value}%`;
});
}
function hideProgress(){
progressBar.forEach( p => {
p.style.opacity = 0;
p.style.width = 0;
});
}


window.addEventListener('scroll',() => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos){
    showProgress();
  }else{
    hideProgress();
  }
}

);



// Galeria

const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target !== imagenesLight) {
    contenedorLight.classList.remove("show");
    imagenesLight.classList.remove("showImage");
  }
});

const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.add("show");
  imagenesLight.classList.add("showImage");
};



// Scrolling Suave

window.onload = () => {
    let links = document.querySelectorAll('.link')
    
    let primero = links[0]
    primero.addEventListener('click', () => {
      scrollSuave('#sobremi', 500, 0)
    })
  
    let segundo = links[1]
    segundo.addEventListener('click', () => {
      scrollSuave('#titulaciones', 500, 0)
    })
  
    let tercero = links[2]
    tercero.addEventListener('click', () => {
      scrollSuave('#conocimientos', 500, 0)
    })
  
    let cuarto = links[3]
    cuarto.addEventListener('click', () => {
      scrollSuave('#trabajos', 500, 0)
    })
  
    let quinto = links[4]
    quinto.addEventListener('click', () => {
      scrollSuave('#contacto', 500, 0)
    })
    
  }
  
  
  const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
  
    const animacion = tiempoAhora => {
      if (tiempoInicial === null) tiempoInicial = tiempoAhora
      tiempoPasado = tiempoAhora - tiempoInicial
      let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
      window.scrollTo(0, auxAnimacion)
      if (tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
  }
  
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }



  // Boton Scrolling

  var scrollToTop = (function() {
    var scrollButton = document.getElementById("scrollToTop")
        showButton = scrollButton.dataset.upshow || 600,
        scrollSpeed = scrollButton.dataset.upspeed || 1000;
    function scrollTop(b) {
        function a(d) {
            c += Math.PI / (b / (d - e));
            c >= Math.PI && window.scrollTo(0, 0);
            0 !== window.scrollY && (window.scrollTo(0, Math.round(scrollTime + scrollTime * Math.cos(c))), e = d, window.requestAnimationFrame(a))
        }
        var scrollTime = window.scrollY / 2,
            c = 0,
            e = performance.now();
        window.requestAnimationFrame(a)
    }
    var scrollPosition = window.scrollY;
    window.addEventListener("scroll", function() {
        scrollPosition = window.scrollY;
        showButton < scrollPosition ? scrollButton.classList.add("visible") : scrollButton.classList.remove("visible")
    });
    scrollButton.onclick = function() {
        scrollTop(scrollSpeed)
    }
})();


