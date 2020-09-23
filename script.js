$(document).ready(function (){

  
  $("#selectpagamento"). change(function(){
    var testo = 1
    var testo = $(this). children("option:selected"). val();

  console.log(testo);

    if( testo == 1){
      console.log("FUNZIONA 1")
    };

    if( testo == 2){
    console.log("FUNZIONA 2")
  };

    if( testo == 4){
    console.log("FUNZIONA 4")
  };

    if( testo == 8){
    console.log("FUNZIONA 8")
  };
  
    if( testo == 12){
    console.log("FUNZIONA 12")
  };

  });
});
