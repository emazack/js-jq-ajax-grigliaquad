$(document).ready(function(){

  // ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 https://flynn.boolean.careers/exercises/api/random/int

  // salvo il rettangolo
  var rettangolo = (".container div");

  $(rettangolo).click(
    function() {
      var rettangonoCliccato = $(this);
      $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success: function (data,stato) {
          rettangonoCliccato.html("<h1><b> " + data.response + " </b></h1>");
        },
        error : function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      });
    }
  );




});
