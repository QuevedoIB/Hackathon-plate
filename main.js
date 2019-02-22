'use strict';

function main () {
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
        this.classList.add('away');
        setTimeout(() => {
            document.getElementById('form-content').innerHTML = "<div></div><h5>Tu mensaje se ha enviado con exito</h5><div></div>";
            var submitButton = document.getElementById('submit');
            submitButton.classList.add('message');
            var text = submitButton.firstChild;
        
            text.nodeValue = "Nos dedicamos a enviar cosas ¿qué esperabas?";
            this.classList.remove('away');
        }, 5000);
  });
}

window.addEventListener('load', main);