var chef = $(".chef");
var activo = $(".Contenido_Chef");

window.onload = function(){
  
  $("#loader").fadeOut();

}

function cambio() {
  chef.removeClass('activo');
  $(this).addClass('activo');
  activo.removeClass('mostrar');
  $(this).children().eq(1).addClass('mostrar');
}

chef.on('click', cambio);

