document.addEventListener("DOMContentLoaded", function(){
  var navMenu = document.getElementById('offcanvas');
  var bsOffcanvas = new bootstrap.Offcanvas(navMenu);
  const toggleOffcanvas = (e) => {
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  }
  document.getElementById("OpenMenu").addEventListener('click',function (e){
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });

  // document.getElementById("screen").addEventListener('click', (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   bsOffcanvas.toggle();
  // });
})