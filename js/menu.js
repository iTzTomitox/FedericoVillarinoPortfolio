document.addEventListener('DOMContentLoaded', function () {

  var check = document.getElementById('menu');
  var nav = document.querySelector('.nav');
  var links = document.querySelectorAll('.nav__links a');

  if (!check || !nav) return;

  function cerrarMenu() {
    check.checked = false;
  }


  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', cerrarMenu);
  }


  document.addEventListener('click', function (evento) {
    if (check.checked && !nav.contains(evento.target)) {
      cerrarMenu();
    }
  });


  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') {
      cerrarMenu();
    }
  });

  var escritorio = window.matchMedia('(min-width: 75em)');
  escritorio.addEventListener('change', function (evento) {
    if (evento.matches) {
      cerrarMenu();
    }
  });

});