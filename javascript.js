let scrollToTop = document.getElementById("up");

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTop.style.display = "flex";
  } else {
    scrollToTop.style.display = "none";
  }
}

// Añade un evento de clic al botón de subir
scrollToTop.addEventListener("click", function () {
  // Usa el método window.scrollTo con una opción de comportamiento suave
  window.scrollTo({
    top: 0,
    behavior: "smooth",
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
