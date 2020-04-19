$(document).ready(function(){

  // ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 https://flynn.boolean.careers/exercises/api/random/int

  // salvo il rettangolo
  var rettangolo = (".container div");

  $(rettangolo).click(
    function() {
      var rettangoloCliccato = $(this);
      $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success: function (data,stato) {
          var numeroRandom = data.response;
          rettangoloCliccato.html("<h1><b> " + numeroRandom + " </b></h1>");
          if (numeroRandom <= 5) {
            rettangoloCliccato.css(
              "background-color", "yellow"
            );
          } else if (numeroRandom > 5) {
            rettangoloCliccato.css(
              "background-color", "green"
            );
          }
        },
        error : function (richiesta, stato, errore) {
          alert("E' avvenuto un errore. " + errore);
        }
      });
    }
  );




});
