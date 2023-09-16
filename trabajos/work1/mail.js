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