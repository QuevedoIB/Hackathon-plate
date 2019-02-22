'use strict';

function main () {
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
        this.classList.add('away');
        setTimeout(() => {
            document.getElementById('form-content').remove();
            var submitButton = document.getElementById('submit');
            submitButton.classList.add('message');
            var text = submitButton.firstChild;
        
            text.nodeValue = "Su mensaje ha sido entregado";
            this.classList.remove('away');
        }, 5000);
  });
}

window.addEventListener('load', main);