$(".grow").click(function () {
     $('#menu').slideToggle(320)
});

$(".botaoLeia").click(function() {
  var content = $(this).parent().next();

  content.slideToggle(500);
});

// const link = document.getElementById('botaoLeia');
// var less = false;
//
// link.addEventListener('click', function(){
//   this.innerHTML = (less = !less) ? 'Mostrar Menos' : 'Mostrar Mais';
// });
