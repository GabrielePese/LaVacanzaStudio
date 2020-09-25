$(document).ready(function (){

  var testo = 1
  var target = $(".paypal1");
  target.addClass("mostra");

  $("#selectpagamento"). change(function(){
    var testo = $(this). children("option:selected"). val();

  console.log(testo);

    if( testo == 1){
      var targetX = $(".paypal1");

      var target2 = $(".paypal2");
      var target4 =$(".paypal4");
      var target8 =$(".paypal8");
      var target12 =$(".paypal12");


      targetX.addClass("mostra");

      target2.removeClass("mostra");
      target4.removeClass("mostra");
      target8.removeClass("mostra");
      target12.removeClass("mostra");
    }

    if( testo == 2){
      var targetX = $(".paypal2");

      var target1 = $(".paypal1");
      var target4 =$(".paypal4");
      var target8 =$(".paypal8");
      var target12 =$(".paypal12");
      

      targetX.addClass("mostra");

      target1.removeClass("mostra");
      target4.removeClass("mostra");
      target8.removeClass("mostra");
      target12.removeClass("mostra");
    }

    if( testo == 4){

      var targetX = $(".paypal4");

      var target1 = $(".paypal1");
      var target2 =$(".paypal2");
      var target8 =$(".paypal8");
      var target12 =$(".paypal12");


      targetX.addClass("mostra");

      target1.removeClass("mostra");
      target2.removeClass("mostra");
      target8.removeClass("mostra");
      target12.removeClass("mostra");
    }

    if( testo == 8){
      var targetX = $(".paypal8");

      var target1 = $(".paypal1");
      var target2 =$(".paypal2");
      var target4 =$(".paypal4");
      var target12 =$(".paypal12");
      

      targetX.addClass("mostra");

      target1.removeClass("mostra");
      target2.removeClass("mostra");
      target4.removeClass("mostra");
      target12.removeClass("mostra");
    }

    if( testo == 12){
      var targetX = $(".paypal12");

      var target1 = $(".paypal1");
      var target2 =$(".paypal2");
      var target4 =$(".paypal4");
      var target8 =$(".paypal8");

      targetX.addClass("mostra");

      target1.removeClass("mostra");
      target2.removeClass("mostra");
      target4.removeClass("mostra");
      target8.removeClass("mostra");

    }

  });
});
