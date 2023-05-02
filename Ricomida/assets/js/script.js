$(document).ready(function() {
    $('.card-title').click(function() {
      $(this).toggle();
    });
    $('#rojo1, #rojo2').dblclick(function() {
        $(this).css('color', 'red');
    });
    $('#enviarCorreo').click(function() {
            alert('El correo fue enviado correctamente...');
          });
      });
    
