(function () {
    'use strict'
  
    document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.remove('close');
      document.querySelector('.offcanvas-collapse').classList.toggle('open');
    })
  })()

const a = document.querySelectorAll('[data-bs-dismiss="offcanvas"]');
const offcanvas = document.querySelector('.offcanvas-collapse');
a.forEach( n => n.addEventListener('click', () => {
  offcanvas.classList.remove('open');
  offcanvas.classList.add('close');
}));